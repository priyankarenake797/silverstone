import React from "react";
import bannerImg from "../assets/banner-silver.jpg";

import {
  FaGlobe,
  FaBullhorn,
  FaTv,
  FaFilm,
  FaIndustry,
  FaCamera,
  FaUsers,
  FaUserTie,
  FaAward,
  FaMagic,
  FaConciergeBell,
  FaVideo,
} from "react-icons/fa";

import "./Services.css";

const Services = () => {
  const services = [
    { icon: <FaGlobe />, title: "National & International Projects" },
    { icon: <FaBullhorn />, title: "Commercial & Brand Content" },
    { icon: <FaTv />, title: "Web Series & TV Shows" },
    { icon: <FaFilm />, title: "Documentary Films" },
    { icon: <FaIndustry />, title: "Corporate & Industrial Films" },
    { icon: <FaCamera />, title: "Photography Projects" },
    { icon: <FaUsers />, title: "Line Production Services" },
    { icon: <FaUserTie />, title: "Experienced Production Team" },
    { icon: <FaAward />, title: "Global Production Standards" },
    { icon: <FaMagic />, title: "VFX Services" },
    { icon: <FaConciergeBell />, title: "On-Set Hospitality Services" },
    {
      icon: <FaVideo />,
      title: "Post Production & Editing Services",
    },
  ];

  return (
    <>
      {/* HERO */}
      <div className="services-page-container">
        <img src={bannerImg} alt="Banner" className="services-page-banner" />
        <div className="services-page-overlay"></div>

        <div className="services-page-content">
          <h1>Our Services</h1>
          <marquee>
            <p>
              Creative production solutions crafted with cinematic excellence.
            </p>
          </marquee>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services-page-section">
        <div className="services-page-heading">
          <span>WHAT WE PROVIDE</span>
          <h2>Professional Production Services</h2>
        </div>

        <div className="services-page-grid">
          {services.map((service, index) => (
            <div className="services-page-box" key={index}>
              <div className="services-page-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
