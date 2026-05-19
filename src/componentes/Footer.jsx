import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/silver-stone-logo.jpeg";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="footer-content">
        {/* LEFT SIDE (Logo + Description) */}
        <div className="footer-left">
          <div className="footer-logo">
            <img
              src={logoImage}
              alt="silver stone"
              className="footer-logo-img"
            />
          </div>

          <p className="desc">
            Silver Stone delivers complete production and line production
            solutions for feature films, commercials, documentaries, web and
            television series, corporate and industrial films, advertising
            content, photography projects, and television programming across
            India and international locations.
          </p>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>
              Line Production & Film Production Post Production & Finishing
            </li>
            <li>Casting & Talent Curation</li>
            <li>On-Set Hospitality Services</li>
            <li>Professional Shooting Equipment & Production Assets</li>
            <li>Theatrical & Digital Film Distribution</li>
            <li>Feature Film & Premium Content Production</li>
            <li>Visual Effects (VFX) Services</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaLocationDot className="contact-icon" />
            <p>Mumbai</p>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>+91 8652168009</p>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>silverstonefilms6@gmail.com</p>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 Silver Stone. All Rights Reserved | Developed by Priyanka D.
          Kadam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
