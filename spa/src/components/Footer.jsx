import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Footer.scss'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <>
      <footer>
        <div className="footer-top">
          <img src="logo1.png" alt="logo" />
          <h4><i class="ri-map-pin-line"></i>Global Business Hub, 5th floor ,512, EON Free Zone, Kharadi, Pune, Maharashtra.</h4>
          <h4><i class="ri-phone-line"></i>+91 816-9119416</h4>
          <h4><i class="ri-mail-send-line"></i>dnwellnessspa@gmail.com</h4>
        </div>
        <div className="footer-bottom">
          <div className="elem">
            <h2>Pages</h2>
            <h4 onClick={() => navigate('/')}>Homepage</h4>
            <h4 onClick={() => navigate('/services')}>Services</h4>
            <h4 onClick={() => navigate('/contact')}>Contact Us</h4>
          </div>
          <div className="elem">
            <h2>Follow us on our socials!</h2>
            <h4><a href="https://www.instagram.com/dnwellnessspa?igsh=MThnM3Z4bzAyY2tucQ==" target="_blank" rel="noopener noreferrer">Instagram</a></h4>
            <h4>Facebook</h4>
            <h4><a href="https://www.google.com/maps/place/Global+Business+Hub,+512,+EON+Free+Zone,+Kharadi,+Pune,+Maharashtra" target="_blank" rel="noopener noreferrer">Find us on google!</a></h4>
          </div>
          <div className="booking">
            <h2>Book Now</h2>
            <div className="book-now">
              <button onClick={() => navigate('/contact')}>Book Now</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer