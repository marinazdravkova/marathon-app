
import './Navbar.css'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg";

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
            
            <div className="nav-container">
                <Link to="/" className="logo-container" onClick={closeMenu}>
                    <img src={logo} alt="Штипски Маратон 2026" className="nav-logo-img" />
                    <div className="logo-text">
                        <span className="logo-main">ШТИПСКИ</span>
                        <span className="logo-sub">МАРАТОН</span>
                    </div>
                </Link>
            </div>

            <div className="nav-controls">

            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
                <span className={isMenuOpen ? "bar open" : "bar"}></span>
            </div>
             
            <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
                <li><Link to="/" className="nav-link" onClick={closeMenu}>Почетна</Link></li>
                <li><Link to="/news" className="nav-link" onClick={closeMenu}>Вести</Link></li>
                <li><Link to="/gallery" className="nav-link" onClick={closeMenu}>Галерија</Link></li>
                <li><Link to="/register" className="nav-link register-mobile" onClick={closeMenu}>Регистрација</Link></li>
            </ul>
            <button className="cta-button"
                    onClick={scrollToForm}>
                    Регистрација</button>
           </div> 
            
            
        </nav>
    );
};
export default Navbar;