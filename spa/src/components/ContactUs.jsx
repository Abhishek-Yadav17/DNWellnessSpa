import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ContactUs.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import { gsap } from 'gsap';

const ContactUs = () => {

  const location = useLocation();
  const [bgDark, setBgDark] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setBgDark(!entry.isIntersecting),
      { threshold: 1 }
    );

    const current = contactRef.current;
    current && observer.observe(current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.to('.contact-hero i', {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 0.8
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar bgDark={bgDark} />
      <main>
        <div className="contact-hero" ref={contactRef}>
          <h1>Contact Us</h1>
          <video src="/contact.mp4" autoPlay loop muted></video>
          <h2>We're here to help you feel your best. Get in touch with us to book your session or ask a question.</h2>
          <i class="ri-arrow-down-line"></i>
        </div>
        <div className="contact-form">
          <div className="form-left">
            <h1>Contact Form</h1>
            <form>
              <div className="row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="row">
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone Number" />
              </div>
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="form-right">
            <h1>Reception</h1>
            <h4><span>Reservation:</span> Dnwellnessspa@gmail.com</h4>
            <h4><span>General:</span> Dnwellnessspa@gmail.com</h4>
            <h4><span>Phone:</span> +91 816-9119416</h4>
            <h4><span>Address:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto?</h4>
            <h4><span>Open:</span> Mon-Sun: 10 a.m. to 9 p.m.</h4>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
