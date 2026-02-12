import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section">
                    <div className="footer-logo">MARATHON</div>
                    <p>Биди дел од најголемиот спортски настан во Македонија. Трчај за себе, трчај за Штип!</p>
                </div>
                <div className="footer-section map-container">
                    <h3>Локација на старт</h3>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.011689255013!2d21.4312658!3d41.996131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a770020463%3A0xc3f6089d81373e44!2sMacedonia%20Square!5e0!3m2!1sen!2smk!4v1700000000000" 
                        width="100%" 
                        height="150" 
                        style={{ border: 0, borderRadius: "8px" }} 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="footer-section">
                    <h3>Контакт</h3>
                    <p>📧 info@stipskimaraton.com.mk</p>
                    <p>📞 +389 2 1234 567</p>
                </div>
                <div className="social-links">
                    <a href="#">FB</a>
                    <a href="#">IG</a>
                    <a href="#">YT</a>
                </div>
            </div>
            <div className="footer-bottom">
                    <p>&copy; 2026 Штипски Маратон. Сите права се задржани.</p>
                </div>
        </footer>
    );
};

export default Footer;