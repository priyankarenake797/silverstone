import React from "react";
import bannerImg from "../assets/banner-silver.jpg";
import logoImage from "../assets/silver-stone-logo.jpeg";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="contact-hero">
        <img src={bannerImg} alt="Banner" className="contact-banner" />

        <div className="contact-overlay"></div>

        <div className="contact-content">
          <h1>Contact Us</h1>
          <marquee>
            <p>Get in touch with us to bring your vision to life.</p>
          </marquee>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-heading">
          <h1>CONTACT US</h1>
          <div className="underline"></div>

          <p>
            We align leaders around a shared purpose and strategic story that
            catalyzes their business and brand to take action.
          </p>
        </div>

        <div className="contact-container">
          {/* LEFT IMAGE */}
          <div className="contact-image">
            <img src={logoImage} alt="contact" />
          </div>

          {/* RIGHT BOXES */}
          <div className="contact-boxes">
            <div className="box">
              <h2>CONTACT US</h2>
              <p>Contact us for a quote. Help or to join the team.</p>

              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
              </div>
            </div>

            <div className="box">
              <div className="icon">📍</div>
              <h3>ADDRESS</h3>
              <p>Mumbai - 400093, India</p>
            </div>

            <div className="box">
              <div className="icon">✉️</div>
              <h3>EMAIL</h3>
              <p>silverstonefilms6@gmail.com</p>
            </div>

            <div className="box">
              <div className="icon">📞</div>
              <h3>CALL US</h3>
              <p>8652168009</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
