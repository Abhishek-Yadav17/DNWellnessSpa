import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Homepage.scss'
import Navbar from './Navbar'
import Footer from './Footer'

const Homepage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [bgDark, setBgDark] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setBgDark(!entry.isIntersecting),
      { threshold: 0.9 }
    )

    const current = heroRef.current
    current && observer.observe(current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar bgDark={bgDark} />
      <main>
        <div className="hero" ref={heroRef}>
          <video src="/homepage.mp4" autoPlay loop muted></video>
          <h1>Welcome to <span>DN Wellness Spa</span></h1>
          <h2>Let your stress melt away in a space designed for peace, privacy, and pure relaxation.</h2>
          <button>Book Your Massage Today</button>
        </div>
        <div className="page1">
          <div className="page1-left">
            <h2>Rejuvenate. Relax. Rebalance.</h2>
          </div>
          <div className="page1-mid">
            <p>Discover a haven of calm where ancient healing meets modern luxury. At DN Wellness Spa, we believe wellness is not a luxury — it's a way of life.</p>

            <p>Whether you're looking to unwind, heal, or restore balance, our carefully curated massage therapies are designed to refresh your body and soothe your soul.</p>
          </div>
          <div className="page1-right">
            <img src="/massage.jpg" alt="" />
          </div>
        </div>
        <div className="page2">
          <div className="page2-content">
            <div className="content-left">
              <img src="/massage2.jpg" alt="massage" />
            </div>
            <div className="content-right">
              <h2>What We Offer?</h2>
              <h4>Professional, certified therapists delivering expert care tailored to your needs.</h4>
              <h4>Premium essential oils & techniques for a truly therapeutic experience.</h4>
              <h4>Personalized wellness experiences crafted to align with your body and lifestyle.</h4>
              <h4>Serene, hygienic, and calming ambiance designed to relax your mind and body.</h4>
              <button onClick={() => navigate('/contact')}>Book Today</button>
            </div>
          </div>
        </div>
        <div className="page3">
          <div className="page3-left">
            <h4>Booking Process</h4>
            <h1>Booking Seamless & Hassel-Free</h1>
            <p>Enjoy a smooth and stress-free booking experience. Just get in touch with us, select your preferred massage type, pick a convenient time, and we'll handle the rest—making sure everything is ready for your moment of relaxation.</p>
          </div>
          <div className="page3-right">
            <img src="massage3.jpg" alt="massage" />
          </div>
          <div className="page3-bottom">
            <div className="elem">
              <h3>Step1</h3>
              <h2>Call to Book</h2>
              <p>Reach out to our team by phone to start your reservation. We’ll guide you through everything you need to know.</p>
              <button onClick={() => navigate('/contact')}>Reservation<i class="ri-arrow-right-up-line"></i></button>
            </div>
            <div className="elem">
              <h3>Step2</h3>
              <h2>Choose a Service</h2>
              <p>Pick from a variety of massage treatments based on your needs—deep tissue, Swedish, aromatherapy, and more.</p>
              <button onClick={() => navigate('/contact')}>Reservation<i class="ri-arrow-right-up-line"></i></button>
            </div>
            <div className="elem">
              <h3>Step3</h3>
              <h2>Select Date & Time</h2>
              <p>Let us know your preferred day and time. We'll check availability and confirm your session at a time that works best for you.</p>
              <button onClick={() => navigate('/contact')}>Reservation<i class="ri-arrow-right-up-line"></i></button>
            </div>
            <div className="elem">
              <h3>Step4</h3>
              <h2>Relax & Enjoy</h2>
              <p>Arrive a bit early, settle in, and enjoy a peaceful massage experience designed just for you.</p>
              <button onClick={() => navigate('/contact')}>Reservation<i class="ri-arrow-right-up-line"></i></button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage