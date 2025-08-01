import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch('https://dnwellnessspa.onrender.com/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) toast.success('Message sent!');
    else toast.error('Failed to send.');
  };

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
            <form onSubmit={sendEmail}>
              <div className="row">
                <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </div>
              <div className="row">
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="form-right">
            <h1>Reception</h1>
            <h4><span>Email:</span> dnwellnessspa@gmail.com</h4>
            <h4><span>Phone:</span> +91 816-9119416</h4>
            <h4><span>Address:</span> Global Business Hub, 5th floor ,512, EON Free Zone, Kharadi, Pune, Maharashtra</h4>
            <h4><span>Open:</span> Mon-Sun: 10 a.m. to 9 p.m.</h4>
          </div>
        </div>
      </main>
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable />
      <Footer />
    </>
  );
};

export default ContactUs;
