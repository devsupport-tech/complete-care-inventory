import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from 'npm:@react-email/components@0.0.22';
import * as React from 'npm:react@18.3.1';

interface ProductionConfirmationEmailProps {
  name: string;
  service: string;
  city?: string;
  message?: string;
}

export const ProductionConfirmationEmail = ({
  name,
  service,
  city,
  message,
}: ProductionConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Production Management service request has been received</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>CBRS Group</Heading>
        
        <Text style={greeting}>Hi {name},</Text>
        
        <Text style={text}>
          We've received your request and our team will reach out shortly.
        </Text>
        
        <Section style={serviceDetails}>
          <Text style={detailsHeader}>Service Request Details:</Text>
          <Text style={detail}><strong>Service:</strong> {service}</Text>
          {city && <Text style={detail}><strong>City:</strong> {city}</Text>}
          {message && (
            <Text style={detail}>
              <strong>Message:</strong> {message}
            </Text>
          )}
        </Section>
        
        <Hr style={hr} />
        
        <Text style={text}>
          One of our Production Management specialists will contact you within 24 hours to discuss your project requirements and schedule a consultation.
        </Text>
        
        <Text style={text}>
          In the meantime, if you have any urgent questions, please don't hesitate to contact us at <strong>(832) 632-7225</strong>.
        </Text>
        
        <Text style={signature}>
          — CBRS Group
        </Text>
        
        <Text style={footer}>
          CBRS Group - Complete Building Restoration Services<br />
          Restoration | Mitigation | Reconstruction
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ProductionConfirmationEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const h1 = {
  color: '#1e3046',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0 0 40px',
  padding: '0',
  textAlign: 'center' as const,
};

const greeting = {
  color: '#333',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const serviceDetails = {
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const detailsHeader = {
  color: '#1e3046',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 12px',
};

const detail = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 8px',
};

const hr = {
  borderColor: '#e6e6e6',
  margin: '24px 0',
};

const signature = {
  color: '#1e3046',
  fontSize: '16px',
  fontWeight: '600',
  margin: '32px 0 16px',
};

const footer = {
  color: '#898989',
  fontSize: '12px',
  lineHeight: '18px',
  margin: '32px 0 0',
  textAlign: 'center' as const,
};