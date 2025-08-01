import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Footer.scss'

const Footer = () => {

  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://dnwellnessspa.onrender.com/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success('Message sent!');
        setEmail('');
      } else {
        toast.error('Failed to send.');
      }
    } catch {
      toast.error('Failed to send.');
    }
  };

  return (
    <>
      <footer>
        <div className="footer-top">
          <img src="logo1.png" alt="logo" />
          <h4><i class="ri-map-pin-line"></i>Global Business Hub, 512, EON Free Zone, Kharadi, Pune, Maharashtra.</h4>
          <h4><i class="ri-phone-line"></i>+91 816-9119416</h4>
          <h4><i class="ri-mail-send-line"></i>dnwellnessspa@gmail.com</h4>
        </div>
        <div className="footer-bottom">
          <div className="elem">
            <h2>Pages</h2>
            <h4>Homepage</h4>
            <h4>Services</h4>
            <h4>Contact Us</h4>
          </div>
          <div className="elem">
            <h2>Social Media</h2>
            <h4><a href="https://www.instagram.com/dnwellnessspa?igsh=MThnM3Z4bzAyY2tucQ==" target="_blank" rel="noopener noreferrer">Instagram</a></h4>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
          </div>
          <div className="newsletter">
            <h2>Newsletter</h2>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
              <button type="button" onClick={handleSubscribe}><i className="ri-send-plane-2-line"></i></button>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable />
      </footer>
    </>
  )
}

export default Footer