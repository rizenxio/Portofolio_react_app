import React from "react";
import "./about.css";
import me from "../../assets/pp-2.jpeg";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            <img src={me} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ year working at UPTcomp</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Project</h5>
              <small>10 ++</small>
            </article>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>

          <a href="#contact" className="btn btn-primary">Lets talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
