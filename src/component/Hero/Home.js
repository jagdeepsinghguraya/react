import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Concept, Code, and Design!</h3>
            <h1>
              Greetings from <span>Jagdeep Singh</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " Passionate Web Developer.",
                    " ReactJs Developer.",
                    " Freelancer.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-justify">
              In my experience of working as a web developer, I have fallen in
              love with what I do and everything my work commitments make me
              learn. I put my best in all the projects that I take up because
              the outcome is a significant representation of the passion and
              interest I withhold.
              <br />
              Together, everything lets me strive towards bettering my skills
              and giving out the best in every project!
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4> LET'S EXPLORE TOGETHER</h4>
                <div className="button">
                  <a
                    href="https://github.com/jagdeepsinghguraya"
                    className="btn_shadow"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jagdeepsinghguraya/"
                    className="btn_shadow"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="btn_shadow">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="mailto:contact@thejagdeepsingh.in"
                    className="btn_shadow"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right text-center">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
