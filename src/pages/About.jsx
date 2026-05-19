import React from "react";
import bannerImg from "../assets/banner-silver.jpg";
import aboutImg from "../assets/about-us.jpeg";
import { FaUsers, FaEye, FaBullseye } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <div className="about-hero">
        <img src={bannerImg} alt="Banner" className="about-banner" />

        <div className="about-overlay"></div>

        <div className="about-content">
          <h1>About Page</h1>
          <marquee>
            <p>
              Welcome to Silver Stone — where imagination meets reality and
              light finds its meaning.
            </p>
          </marquee>
        </div>
      </div>
      <br></br>
      {/* ABOUT SECTION */}
      <section className="silver-about-section">
        {/* LEFT CONTENT */}
        <div className="silver-about-left">
          <h2>About Silver Stone</h2>

          <h4>Crafting Cinema with Precision, Passion, and Purpose</h4>

          <p>
            Silver Stone is a premier full-service film production and line
            production company, committed to delivering world-class production
            solutions for projects across India and international destinations.
            With a strong foundation in creative collaboration, production
            management, and on-ground execution, we partner with filmmakers,
            production houses, studios, OTT platforms, advertising agencies,
            global brands, and independent creators to transform ideas into
            visually compelling stories. Driven by a passion for cinematic
            excellence and precision-driven execution, Arati Filmz provides
            end-to-end production support tailored to the unique demands of
            every project. Our expertise spans feature films, television and web
            series, commercials, branded content, documentaries, music videos,
            fashion and photography campaigns, corporate films, industrial
            films, digital advertising content, and live-action productions.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="silver-about-right">
          <img src={aboutImg} alt="About Silver Stone" />
        </div>
      </section>

      {/* INFO CARDS SECTION */}
      <section className="silver-info-section">
        <div className="silver-info-grid">
          <div className="silver-info-card">
            <div className="silver-info-icon">
              <FaUsers />
            </div>

            <h3>Who We Are</h3>

            <p>
              We are a passionate film production and line production company
              dedicated to delivering high-quality cinematic experiences with
              creativity, professionalism, and precision.
            </p>
          </div>

          <div className="silver-info-card">
            <div className="silver-info-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              Our vision is to create impactful visual storytelling that
              inspires, entertains, and connects audiences across global
              platforms.
            </p>
          </div>

          <div className="silver-info-card">
            <div className="silver-info-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              We aim to provide seamless production solutions while maintaining
              the highest standards of creativity, execution, and client
              satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
