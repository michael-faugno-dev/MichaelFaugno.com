import React, { useState, FormEvent } from 'react';
import '../assets/styles/Contact.scss';
import { TextField, ThemeProvider, createTheme } from '@mui/material';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007bff',
    },
  },
});

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      formData as unknown as Record<string, unknown>, // Cast formData properly
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="contact_wrapper" id="contact" style={{width: '82%', margin: '0 auto', padding: '20px'}}>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div style={{display: 'flex', gap: '20px'}}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { color: '#000000' },
              }}
              InputProps={{
                style: { color: '#000000', backgroundColor: '#ffffff' },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { color: '#000000' },
              }}
              InputProps={{
                style: { color: '#000000', backgroundColor: '#ffffff' },
              }}
            />
          </div>
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{
              style: { color: '#000000' },
            }}
            InputProps={{
              style: { color: '#000000', backgroundColor: '#ffffff' },
            }}
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              alignSelf: 'flex-start'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default ContactForm;