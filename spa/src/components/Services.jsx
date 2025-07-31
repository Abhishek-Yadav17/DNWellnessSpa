import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Services.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import { gsap } from 'gsap';

const Services = () => {

  const cardData = [
    {
      img: "card1.jpg",
      title: "Swedish Massage",
      desc: "A gentle, rhythmic massage that calms the nervous system and promotes deep relaxation.",
      duration: "60-90 mins",
      price: "₹ 2000 - ₹ 2500"
    },
    {
      img: "card2.jpg",
      title: "Deep Tissue Massage",
      desc: "A targeted massage focusing on deeper layers of muscle and connective tissue — ideal for athletes, professionals, and those with chronic tension.",
      duration: "60-90mins",
      price: "₹ 2500 - ₹ 3000"
    },
    {
      img: "card3.jpg",
      title: "Aromatherapy Massage",
      desc: "A soothing, sensory massage using essential oils to restore emotional and physical well-being.",
      duration: "60-90mins",
      price: "₹ 2500 - ₹ 3000"
    }
  ];

  const plansData = [
    {
      title: "No Travel Hassle - Pure Relaxation",
      desc: "Enjoy home comfort with our expert massage therapists at your doorstep.",
      img: "/massage.jpg"
    },
    {
      title: "Tailored Experience",
      desc: "Each session is personalized to your body's needs and stress points.",
      img: "/massage2.jpg"
    },
    {
      title: "Flexible Scheduling",
      desc: "Book your massage anytime that fits your lifestyle, day or night.",
      img: "/massage3.jpg"
    },
    {
      title: "Sanitized Equipment",
      desc: "We ensure clean, safe, and hygienic tools for your peace of mind.",
      img: "/massage4.jpg"
    }
  ];

  const location = useLocation();
  const [planIndex, setPlanIndex] = useState(0);
  const currentPlan = plansData[planIndex];
  const [bgDark, setBgDark] = useState(false);
  const contactRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  const changePlan = (newIndex) => {
    const tl = gsap.timeline();
    tl.to([contentRef.current, imgRef.current], {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setPlanIndex(newIndex),
    }).to([contentRef.current, imgRef.current], {
      opacity: 1,
      duration: 0.3,
      delay: 0.1
    });
  };

  const next = () => changePlan((planIndex + 1) % plansData.length);
  const prev = () => changePlan((planIndex - 1 + plansData.length) % plansData.length);


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
    gsap.to('.services-hero i', {
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
        <div className="services-hero" ref={contactRef}>
          <h1>Services</h1>
          <video src="/services.mp4" autoPlay loop muted></video>
          <h2>Discover personalized therapies designed for your well-being.</h2>
          <i class="ri-arrow-down-line"></i>
        </div>
        <div className="services">
          <h1>Our Signature Therapies</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, at!</h4>
          <div className="services-cards">
            {cardData.map((card, idx) => (
              <div className="card" key={idx}>
                <img src={card.img} alt="card" />
                <div className="card-inner">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <div className="pricings">
                    <h4>{card.duration}</h4>
                    <h4>{card.price}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="plans">
          <div className="plans-inner">
            <div className="plans-left" ref={contentRef}>
              <h2>{currentPlan.title}</h2>
              <h4>{currentPlan.desc}</h4>
              <button>Reservation <i className="ri-arrow-right-up-line"></i></button>
              <div className="pagination-btns">
                <i className="ri-arrow-left-line" onClick={prev}></i>
                <i className="ri-arrow-right-line" onClick={next}></i>
              </div>
            </div>
            <div className="plans-right">
              <img ref={imgRef} src={currentPlan.img} alt="plans" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
