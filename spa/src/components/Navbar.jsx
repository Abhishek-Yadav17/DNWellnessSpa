import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.scss'

const Navbar = ({ bgDark }) => {

  const navigate = useNavigate();

  return (
    <>
      <nav className={bgDark ? 'dark' : ''}>
        <h4 onClick={() => navigate('/services')}>Services</h4>
        <img src={bgDark ? '/logo1.png' : '/logo.png'} alt="logo" onClick={() => navigate('/')}/>
        <button onClick={() => navigate('/contact')}>Contact Us</button>
      </nav>
    </>
  )
}

export default Navbar