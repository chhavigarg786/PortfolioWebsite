import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTextarea, BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uk5iwvm', 'template_gzf8ltm', form.current, '_rvnK_RO3VPXi_A_6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset(); 
  };

  return (

    
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>chhavigarg786@gmail.com</h5>
            <a href="mailto:chhavigarg786@gmail.com" target="_blank">Send a Message</a>
           </article>
           <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'  />
            <h4>Messanger</h4>
            <h5>Chhavi Garg</h5>
            <a href="https://m.me/100009005803523 " target="_blank">Send a Message</a>
           </article>
           <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+1) 604-719-8159</h5>
            <a href="https://api.whatsapp.com/send?phone+16047198159" target="_blank">Send a Message</a>
           </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder="Yur Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact