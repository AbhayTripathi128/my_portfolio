import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 30px auto 80px; /* Reduced top margin from 80px to 40px */
  padding: 40px;
  background: #1a202c; /* Darker background */
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  animation: ${fadeIn} 0.6s ease-out;
  color: #e2e8f0;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: linear-gradient(to right, rgb(74, 144, 226), rgb(80, 227, 194));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 24px;
  width: 100%;

  input, textarea, select {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #2d3748;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s;
    background-color: #2d3748;
    color: #e2e8f0;
    box-sizing: border-box;
    height: ${props => props.isTextarea ? 'auto' : '54px'};
  }
  
  input:focus, textarea:focus, select:focus {
    border-color: #63b3ed;
    box-shadow: 0 0 0 3px rgba(99, 179, 237, 0.15);
  }
  
  label {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    background: #2d3748;
    padding: 0 4px;
    color: #a0aec0;
    pointer-events: none;
    transition: all 0.3s;
  }
  
  /* float label when focused or having content */
  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -8px;
    left: 12px;
    font-size: 0.85rem;
    color: #63b3ed;
  }

  /* Adjust for textarea */
  textarea + label {
    top: 14px;
    transform: none;
  }
  
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -8px;
  }
`;

const Button = styled.button`
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #63b3ed 0%, #4299e1 100%);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(66, 153, 225, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Success = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #48bb78;
  font-weight: bold;
`;

// New component for contact method selection
const SelectGroup = styled.div`
  margin-bottom: 24px;
  width: 100%;
`;

const SelectLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #a0aec0;
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #2d3748;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #2d3748;
  color: #e2e8f0;
  outline: none;
  transition: all 0.3s;
  box-sizing: border-box;
  height: 54px; /* Match the height of other inputs */
  
  &:focus {
    border-color: #63b3ed;
    box-shadow: 0 0 0 3px rgba(99, 179, 237, 0.15);
  }

  option {
    background-color: #2d3748;
    color: #e2e8f0;
  }
`;

const Contact = () => {
  const [form, setForm] = useState({ 
    name: '', 
    contactMethod: 'email', // default to email
    email: '', 
    phone: '',
    subject: '', // New field for subject/role
    message: '' 
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // ... you could integrate an API here ...
    setStatus('Thanks! Your message has been sent.');
    setForm({ 
      name: '', 
      contactMethod: 'email',
      email: '', 
      phone: '',
      subject: '', // Reset the subject field
      message: '' 
    });
  };

  return (
    <Container>
      <Heading>Contact Me</Heading>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <input
            type="text"
            name="name"
            placeholder=" "
            value={form.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </InputGroup>
        
        <SelectGroup>
          <SelectLabel>Contact Method</SelectLabel>
          <Select 
            name="contactMethod" 
            value={form.contactMethod}
            onChange={handleChange}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </Select>
        </SelectGroup>
        
        {form.contactMethod === 'email' ? (
          <InputGroup>
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </InputGroup>
        ) : (
          <InputGroup>
            <input
              type="tel"
              name="phone"
              placeholder=" "
              value={form.phone}
              onChange={handleChange}
              required
            />
            <label>Phone</label>
          </InputGroup>
        )}

        <InputGroup>
          <input
            type="text"
            name="subject"
            placeholder=" "
            value={form.subject}
            onChange={handleChange}
            required
          />
          <label>Subject / Role</label>
        </InputGroup>
        
        <InputGroup isTextarea>
          <textarea
            name="message"
            rows="5"
            placeholder=" "
            value={form.message}
            onChange={handleChange}
            required
          />
          <label>Message</label>
        </InputGroup>
        
        <Button type="submit">Send Message</Button>
      </Form>
      {status && <Success>{status}</Success>}
    </Container>
  );
};

export default Contact;
