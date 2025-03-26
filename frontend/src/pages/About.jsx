import React from "react";
import "./About.css"; // ✅ Import the styles

const About = () => {
  return (
    <section className="about-section">
      <h2>About Gaine Africa</h2>
      <p>
        Gaine Africa was born out of a need to bridge the gap between small-scale
        farmers and real-time agricultural data. As a developer passionate about
        leveraging technology for impact, I saw firsthand how access to market trends,
        predictive analytics, and digital financial tools could transform agribusiness.
        This project started when I sufferd a loss while growing onions in my farm in the year 2024 and has since grown into
        a mission-driven platform aiming to empower farmers with data-driven
        decision-making.
      </p>

      <h3>Full-Stack Developer & Electrical/Electronic Engineer</h3>
      <p><strong>Duncan Korir</strong></p>
      <ul>
        <li>
          <a href="https://linkedin.com/in/duncorir" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/duncorir" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://bit.ly/DuncanKorir" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </li>
      </ul>

      <h3>Project Repository</h3>
      <p>
        <a href="https://www.github.com/duncorir/Gaine_Africa_app" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </section>
  );
};

export default About;
