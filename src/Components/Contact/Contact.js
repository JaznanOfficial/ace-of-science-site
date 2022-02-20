import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        
        
        emailjs.sendForm('service_ijfpemq', 'template_ghfeodq', form.current, 'user_7cU7ocfO7vkpe6oV8FYWi')
        .then((result) => {
            console.log(result.text);
            swal({
                title: "Good job!",
                text: "Your message successfully sent! Please check your email",
                icon: "success",
            });
            e.target.reset()
          
      }, (error) => {
          console.log(error.text);
          Swal({
            title: "Oops!",
            text: `{error.text}`,
            icon: "warning",
          });
          e.target.reset()
      });
    }
    return (
        <div>
        <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact us</h2>
            <div class="contact-content d-lg-flex flex-lg-row flex-sm-column justify-content-center align-items-center mt-5">
                <div class="column left w-100 mx-3">
                    <div class="text">Get in Touch</div>
                    <p className='text-center'>In any purpose you can contact with me</p>
                    <div class="icons ms-3 text-start">
                        <div class="row-icon">
                            <div><i class="fas fa-user"></i></div>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Ace Of Science</div>
                            </div>
                        </div>
                        <div class="row-icon">
                            <div><i class="fas fa-map-marker-alt"></i></div>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Chittagong, Bangladesh</div>
                            </div>
                        </div>
                        <div class="row-icon">
                            <div><i class="fas fa-envelope"></i></div>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">dev.aceofscience@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right w-100 mx-3">
                    <div class="text">Message us</div>
                    <form action="#" onSubmit={sendMail} ref={form}>
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" name='name' required/>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" name='email' required/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" name='subject' required/>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." name='message' required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Contact;