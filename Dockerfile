# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies including dev (needed for Vite build)
RUN npm install --silent

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Install serve and curl (for static serving and healthcheck)
RUN apk add --no-cache curl && npm install -g serve

# Set working directory
WORKDIR /app

# Copy built app and package info
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose the port your app runs on
EXPOSE 8080

# Environment settings
ENV NODE_ENV=production
ENV PORT=8080

# Healthcheck using curl
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Start the app with serve
CMD ["serve", "-s", "dist", "-l", "8080"]
