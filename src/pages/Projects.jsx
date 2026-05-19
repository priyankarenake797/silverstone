import React from "react";
import bannerImg from "../assets/banner-silver.jpg";

import projects1 from "../assets/projects1.jpg";
import projects2 from "../assets/projects2.jpg";
import projects3 from "../assets/projects3.jpeg";
import projects4 from "../assets/projects4.jpeg";

import "./Projects.css";

function Projects() {
  return (
    <>
      {/* Banner Section */}
      <div className="projects-container1">
        <img src={bannerImg} alt="Banner" className="projects-banner" />

        <div className="projects-overlay"></div>

        <div className="projects-content">
          <h1>Projects</h1>

          <marquee>
            <p>Explore our innovative lighting designs and completed work.</p>
          </marquee>
        </div>
      </div>
      <br />
      {/* New Aesthetic Project Section */}
      <section className="silver-page-project">
        <div className="silver-project-heading">
          <h2>Our Creative Projects</h2>
          <p>
            Bringing cinematic visuals, storytelling, and creative production
            together with premium quality execution.
          </p>
        </div>

        <div className="silver-project-grid">
          <div className="silver-project-card">
            <img src={projects1} alt="Filmz" />

            <div className="silver-project-overlay">
              <h3>Filmz</h3>
              <p>Feature Film Production</p>
            </div>
          </div>

          <div className="silver-project-card">
            <img src={projects2} alt="Web Series" />

            <div className="silver-project-overlay">
              <h3>Web Series</h3>
              <p>Commercial & OTT Shoots</p>
            </div>
          </div>

          <div className="silver-project-card">
            <img src={projects3} alt="OTT Short Filmz" />

            <div className="silver-project-overlay">
              <h3>OTT Short Filmz</h3>
              <p>Theatrical Experience</p>
            </div>
          </div>

          <div className="silver-project-card">
            <img src={projects4} alt="Advertisement" />

            <div className="silver-project-overlay">
              <h3>Advertisement</h3>
              <p>Documentary & Brand Stories</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
