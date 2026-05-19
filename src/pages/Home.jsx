import React from "react";
import bannerImg from "../assets/banner-silver.jpg";

import aboutImg from "../assets/about-us.jpeg";
import servicesImg from "../assets/services.jpeg";

import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpeg";

// Project Images
import projects1 from "../assets/projects1.jpg";
import projects2 from "../assets/projects2.jpg";
import projects3 from "../assets/projects3.jpeg";
import projects4 from "../assets/projects4.jpeg";

import "./Home.css";

const Home = () => {
  return (
    <div className="banner-container">
      <img src={bannerImg} alt="Banner" className="banner" />

      <div className="overlay-text">
        Where imagination meets reality and light finds its meaning — that is
        Silver Stone
      </div>
      <br />
      {/* About Section */}

      <section className="about-section">
        {/* LEFT CONTENT */}
        <div className="about-left">
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
        <div className="about-right">
          <img src={aboutImg} alt="About Silver Stone" />
        </div>
      </section>
      <br></br>
      {/* Services Section */}
      <section className="section services">
        <div className="services-container">
          {/* Left Side Image */}
          <div className="services-left">
            <img src={servicesImg} alt="Services" />
          </div>

          {/* Right Side Content */}
          <div className="services-right">
            <h2>Our Services</h2>

            <ul>
              <li>
                <span className="tick">✔</span> National & International
                Projects
              </li>
              <li>
                <span className="tick">✔</span> Commercial & Brand Content
              </li>
              <li>
                <span className="tick">✔</span> Web Series & TV Shows
              </li>
              <li>
                <span className="tick">✔</span> Documentary Films
              </li>
              <li>
                <span className="tick">✔</span> Corporate & Industrial Films
              </li>
              <li>
                <span className="tick">✔</span> Photography Projects
              </li>
              <li>
                <span className="tick">✔</span> Line Production Services
              </li>
              <li>
                <span className="tick">✔</span> Experienced Production Team
              </li>
              <li>
                <span className="tick">✔</span> Global Production Standards
              </li>
              <li>
                <span className="tick">✔</span> VFX Services
              </li>
              <li>
                <span className="tick">✔</span> On-Set Hospitality Services
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      {/* Our Team Section */}
      <section className="section team-section">
        <h2>Our Team</h2>

        <div className="team-container">
          <div className="team-card">
            <img src={team1} alt="Team Member" />
            <div className="team-overlay">
              <h3>Director</h3>
              {/* <p>Director</p> */}
            </div>
          </div>

          <div className="team-card">
            <img src={team2} alt="Team Member" />
            <div className="team-overlay">
              <h3>Producer</h3>
              {/* <p>Producer</p> */}
            </div>
          </div>

          <div className="team-card">
            <img src={team3} alt="Team Member" />
            <div className="team-overlay">
              <h3>Cinematographer</h3>
              {/* <p>Cinematographer</p> */}
            </div>
          </div>

          <div className="team-card">
            <img src={team4} alt="Team Member" />
            <div className="team-overlay">
              <h3>Editor</h3>
              {/* <p>Editor</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <br></br>
      <br></br>
      <section className="projects-section">
        <h2>Our Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <img src={projects1} alt="Project" />
            <div className="projects-overlay">
              <h3>Filmz</h3>
              <p>Feature Filmz</p>
            </div>
          </div>

          <div className="project-card">
            <img src={projects2} alt="Project" />
            <div className="projects-overlay">
              <h3>Web Series</h3>
              <p>Commercial Shoot</p>
            </div>
          </div>

          <div className="project-card">
            <img src={projects3} alt="Project" />
            <div className="projects-overlay">
              <h3> OTT Short Filmz</h3>
              <p>Theatrical</p>
            </div>
          </div>

          <div className="project-card">
            <img src={projects4} alt="Project" />
            <div className="projects-overlay">
              <h3>Advertisment</h3>
              <p>Documentary</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
