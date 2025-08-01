import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {

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
              <input type="email" placeholder="Enter your email" />
              <button type="submit"><i className="ri-send-plane-2-line"></i></button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer