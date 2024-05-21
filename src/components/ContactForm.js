import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import '../styles/form.css';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    message.loading('sending message')
    emailjs
      .sendForm('service_l65m14o', 'template_idbf12f', form.current, {
        publicKey: 'j_f0C6Xo9KehwMzAk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('Message sent!');
          e.target.reset();
          message.success('message sent successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <div className='margin'>
        {/* <label>Name</label> */}
        <input type="text" placeholder='name' name="user_name" />
      </div>
      <div className='margin'>
        {/* <label>Email</label> */}
        <input type="email" placeholder='email address' name="user_email" />
      </div>
      <div className='margin'>
        {/* <label>Message</label> */}
        <textarea placeholder='message' name="message" />
      </div>
      <input className='margin submit' type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;