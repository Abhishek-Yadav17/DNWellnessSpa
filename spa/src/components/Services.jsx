import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Services.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import { gsap } from 'gsap';

const Services = () => {

  const navigate = useNavigate();

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
    },
    {
      img: "/card4.jpg",
      title: "Foot Reflexology",
      desc: "A calming therapy using pressure points on the feet to restore balance and wellbeing.",
      duration: "60-90mins",
      price: "₹ 1500 - ₹ 2000"
    },
    {
      img: "/card5.jpg",
      title: "Bamboo Massage Therapy",
      desc: "A deep tissue massage with warm bamboo sticks to ease tension and improve circulation.",
      duration: "60mins",
      price: "₹ 2500"
    },
    {
      img: "/card6.jpeg",
      title: "Sports Massage Therapy",
      desc: "A targeted massage for active bodies to boost recovery, flexibility, and prevent injuries.",
      duration: "60mins",
      price: "₹ 2500"
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
          <h2>Discover personalized spa therapies thoughtfully designed to support your health, balance, and overall well-being.</h2>
          <i class="ri-arrow-down-line"></i>
        </div>
        <div className="services">
          <h1>Our Signature Therapies</h1>
          <h4>Enjoy soothing treatments that relax your body, calm your mind, and restore your inner balance.</h4>
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
        <div className="memberships">
          <h1>Memberships</h1>
          <h4>Select the membership that best fits your wellness journey and enjoy exclusive benefits tailored to your needs.</h4>
          <div className="membership-cards">
            <div className="membership-card">
              <h2>Silver Membership</h2>
              <img src="/membership1.png" alt="membership" />
              <h4>Validity 6 months</h4>
              <ul>
                <li><i class="ri-check-fill"></i><span>60</span> min sessions</li>
                <li><i class="ri-check-fill"></i><span>16</span> sessions</li>
              </ul>
              <button onClick={() => navigate('/contact')}>Book now</button>
            </div>
            <div className="membership-card middle">
              <h2>Diamond Membership</h2>
              <img src="/membership2.png" alt="membership" />
              <h4>Validity 1 year</h4>
              <ul>
                <li><i class="ri-check-fill"></i><span>60</span> min sessions</li>
                <li><i class="ri-check-fill"></i><span>16</span> sessions</li>
              </ul>
              <button onClick={() => navigate('/contact')}>Book now</button>
            </div>
            <div className="membership-card">
              <h2>Gold Membership</h2>
              <img src="/membership3.png" alt="membership" />
              <h4>Validity 6 months</h4>
              <ul>
                <li><i class="ri-check-fill"></i><span>60</span> min sessions</li>
                <li><i class="ri-check-fill"></i><span>16</span> sessions</li>
              </ul>
              <button onClick={() => navigate('/contact')}>Book now</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
