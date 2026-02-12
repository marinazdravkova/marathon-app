
import './Navbar.css'; 
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollToForm = () => {
        const section = document.getElementById('registration');
        if(section){
        section.scrollIntoView({behavior: 'smooth'});
        setIsMenuOpen(false);
        }
    }
    return (
        <nav className="navbar">
            
            <div className="logo">MARATHON</div>

            <div className="nav-controls">
            <button className="cta-button"
                    onClick={scrollToForm}>
                    Регистрација</button>

            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
            </div>
            <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Почетна</a></li>
                <li><a href="#about" onClick={() => setIsMenuOpen(false)}>За трката</a></li>
                <li><a href="#results" onClick={() => setIsMenuOpen(false)}>Резултати</a></li>
            </ul>
           </div> 
            
            
        </nav>
    );
};
export default Navbar;