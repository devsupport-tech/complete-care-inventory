import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22';
import * as React from 'npm:react@18.3.1';

interface ThankYouEmailProps {
  name: string;
}

export const ThankYouEmail = ({ name }: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting CBRS Group</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank You for Contacting Us!</Heading>
        <Text style={text}>
          Dear {name},
        </Text>
        <Text style={text}>
          Thank you for reaching out to CBRS Group. We have received your message and appreciate you taking the time to contact us.
        </Text>
        <Text style={text}>
          Our team will review your inquiry and get back to you as soon as possible. We typically respond within 24 hours during business days.
        </Text>
        <Text style={text}>
          If you have any urgent questions or need immediate assistance, please don't hesitate to call us at <Link href="tel:+18326327225" style={link}>(832) 632-7225</Link>.
        </Text>
        <Text style={text}>
          Thank you for choosing CBRS Group for your contractor support needs.
        </Text>
        <Text style={text}>
          Best regards,<br />
          The CBRS Group Team
        </Text>
        <Text style={footer}>
          <Link
            href="https://cbrsgroup.com"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            CBRS Group
          </Link>
          <br />
          Professional Contractor Support Services
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ThankYouEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};