import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0});
  const navigate = useNavigate();

  useEffect (() => {
    const targetDate = new Date("May 10, 2026 09:00:00").getTime();

    const interval = setInterval (() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60)),
        mins: Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000)
      });

    }, 1000);

    return () => clearInterval(interval);
     
  }, []);

  const goToRegister = () => {
        navigate('/register');
    }

 /* const scrollToForm = () => {
    const section = document.getElementById('registration');
    section.scrollIntoView({behavior: 'smooth'});
  }; */
  return (
    <section className="hero">
      <div className="hero-overlay">
      <div className="hero-content">
        <span className="hero-badge">4 Maj, 2026 • ШТИП, МАКЕДОНИЈА</span>

        <h1>ШТИПСКИ МАРАТОН <span className="highlight">2026!</span></h1>

        <div className="countdown">
          <div className="time-box"><span>{timeLeft.days}</span> дена</div>
          <div className="time-box"><span>{timeLeft.hours}</span> часа</div>
          <div className="time-box"><span>{timeLeft.mins}</span> мин</div>
          <div className="time-box"><span>{timeLeft.secs}</span> сек</div>
        </div>
        <p>Трчај кон иднината. Постави нов рекорд. Биди дел од историјата.</p>

        <div className="hero-btns">
            <button className="hero-btn" onClick={goToRegister}>Пријави се сега</button>
            <button className="btn-outline">Дознај повеќе</button>
        </div>
        
      </div>
      </div>
    </section>
  );
};

export default Hero;