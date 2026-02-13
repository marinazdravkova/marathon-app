
import './Navbar.css'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollToForm = () => {
        const section = document.getElementById('registration');
        if(section){
        section.scrollIntoView({behavior: 'smooth'});
        setIsMenuOpen(false);
        }
    }

    const closeMenu = () => setIsMenuOpen(false);
    return (
        <nav className="navbar">
            
            <div className="logo">MARATHON</div>

            <div className="nav-controls">

            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
            </div>
             
            <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
                <li><Link to="/" className="nav-link" onClick={closeMenu}>Почетна</Link></li>
                <li><Link to="/news" className="nav-link" onClick={closeMenu}>Вести</Link></li>
                <li><Link to="/register" className="nav-link" onClick={closeMenu}>Регистрација</Link></li>
            </ul>
            <button className="cta-button"
                    onClick={scrollToForm}>
                    Регистрација</button>
           </div> 
            
            
        </nav>
    );
};
export default Navbar;