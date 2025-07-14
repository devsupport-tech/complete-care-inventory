import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from 'npm:@react-email/components@0.0.22';
import * as React from 'npm:react@18.3.1';

interface ContactMessageEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactMessageEmail = ({
  name,
  email,
  phone,
  message,
}: ContactMessageEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Message</Heading>
        
        <Text style={text}>
          You have received a new message through the CBRS Group contact form.
        </Text>
        
        <Section style={section}>
          <Row>
            <Column style={labelColumn}>
              <Text style={label}>Name:</Text>
            </Column>
            <Column style={valueColumn}>
              <Text style={value}>{name}</Text>
            </Column>
          </Row>
          
          <Row>
            <Column style={labelColumn}>
              <Text style={label}>Email:</Text>
            </Column>
            <Column style={valueColumn}>
              <Text style={value}>{email}</Text>
            </Column>
          </Row>
          
          {phone && (
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Phone:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{phone}</Text>
              </Column>
            </Row>
          )}
        </Section>
        
        <Section style={messageSection}>
          <Text style={messageLabel}>Message:</Text>
          <Text style={messageText}>{message}</Text>
        </Section>
        
        <Text style={footer}>
          This message was sent through the contact form on cbrsgroup.com
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactMessageEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eaeaea',
  borderRadius: '8px',
  margin: '40px auto',
  padding: '40px',
  width: '600px',
};

const h1 = {
  color: '#2563eb',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 24px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 24px',
};

const section = {
  margin: '24px 0',
};

const labelColumn = {
  width: '120px',
  verticalAlign: 'top',
};

const valueColumn = {
  verticalAlign: 'top',
};

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 8px',
};

const value = {
  color: '#111827',
  fontSize: '16px',
  margin: '0 0 8px',
};

const messageSection = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  margin: '24px 0',
  padding: '20px',
};

const messageLabel = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 12px',
};

const messageText = {
  color: '#111827',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const footer = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '32px 0 0',
  textAlign: 'center' as const,
};