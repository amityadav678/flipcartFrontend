import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="flipkart-footer">
            <div className="footer-section">
                <h3>ABOUT</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Flipkart Stories</li>
                    <li>Press</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>GROUP COMPANIES</h3>
                <ul>
                    <li>Myntra</li>
                    <li>Cleartrip</li>
                    <li>Shopsy</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>HELP</h3>
                <ul>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>CONSUMER POLICY</h3>
                <ul>
                    <li>Cancellation & Returns</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>Grievance Redressal</li>
                    <li>EPR Compliance</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Mail Us:</h3>
                <address>
                    Flipkart Internet Private Limited,
                    <br />
                    Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                    <br />
                    Outer Ring Road, Devarabeesanahalli Village,
                    <br />
                    Bengaluru, 560103, Karnataka, India
                </address>
            </div>
            <div className="footer-section">
                <h3>Social</h3>
                <ul className="social-icons">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Registered Office Address:</h3>
                <address>
                    Flipkart Internet Private Limited,
                    <br />
                    Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                    <br />
                    Outer Ring Road, Devarabeesanahalli Village,
                    <br />
                    Bengaluru, 560103, Karnataka, India
                    <br />
                    CIN : U51109KA2012PTC066107
                    <br />
                    Telephone: 044-45614700 / 044-67415800
                </address>
            </div>
            <div className="copyright">
                <p>&copy; 2007-2024 AmitYadav.yt</p>
            </div>
        </footer>
    );
};

export default Footer;
