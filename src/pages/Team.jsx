import React from "react";
import bannerImg from "../assets/banner-silver.jpg";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpeg";
import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="team-container1">
        <img src={bannerImg} alt="Banner" className="team-banner" />

        <div className="team-overlay"></div>

        <div className="team-content">
          <h1>Our Team</h1>
          <marquee>
            <p>Meet the creative minds behind Silver Stone.</p>
          </marquee>
        </div>
      </div>

      <section className="team-section-page">
        <h2>The Production Team</h2>

        <div className="team-card-page">
          <div className="team-card">
            <img src={team1} alt="Director" />
            <div className="team-hover-name">Director</div>
          </div>

          <div className="team-card">
            <img src={team2} alt="Producer" />
            <div className="team-hover-name">Producer</div>
          </div>

          <div className="team-card">
            <img src={team3} alt="Cinematographer" />
            <div className="team-hover-name">Cinematographer</div>
          </div>

          <div className="team-card">
            <img src={team4} alt="Editor" />
            <div className="team-hover-name">Editor</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
