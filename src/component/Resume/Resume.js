import React from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>FOLLOW UP ON MY EXPERIENCE</h4>
            <h2>My Resume</h2>
          </div>

          <div className="content-section d_flex">
            <div className="left">
              <div className="heading ">
                <h5>2004-2022</h5>
                <h2 className="h2">Education</h2>
              </div>

              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h5>2021-2022</h5>
                <h2 className="h2">Job Experience</h2>
              </div>

              <div className="content">
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        {/* skill  */}
        <div class="skills container top">
          <div className="heading text-center">
            <h4>My level of knowledge in some Tools 🔧</h4>
            <h2>Skills</h2>
          </div>
          <div className="content-section d_flex mb30">
            <div class="left">
              <div class="skills-bar btn_shadow">
                <div class="bar">
                  <div class="info">
                    <span>HTML/CSS/Sass</span>
                  </div>
                  <div class="progress-line html">
                    <span></span>
                  </div>
                </div>

                <div class="bar">
                  <div class="info">
                    <span>Javascript</span>
                  </div>
                  <div class="progress-line javascript">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>React</span>
                  </div>
                  <div class="progress-line react">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>MySql</span>
                  </div>
                  <div class="progress-line mysql">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>Data Structure & Algo</span>
                  </div>
                  <div class="progress-line ds">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <h3 className="home-btn rcv">Tools & Technologies</h3>
              <div class="content">
                <div>
                  <h4>Front-End Web</h4>
                  <p>HTML</p>
                  <p>CSS,</p>
                  <p>SASS,</p>
                  <p>JavaScript,</p>
                  <p>React.js</p>

                  <h4>Programming Language</h4>
                  <p>C,</p>
                  <p>C++,</p>
                  <p>Core Java</p>
                </div>

                <div>
                  <h4>Version Control System</h4>
                  <p>Git</p>

                  <h4>Tools</h4>
                  <p>Babel, Webpack, photoshop</p>

                  <h4>Database</h4>
                  <p>Rdbms ( MySQL)</p>

                  <h4>Data structures and algorithms</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button  */}
        <div className="text-center mb30">
          <a
            href="./Resume_Jagdeep_Singh.pdf"
            download="Resume_JagdeepSingh"
            className="home-btn rcv mb30"
          >
            Download CV 📑
          </a>
        </div>
      </section>
    </>
  );
};

export default Resume;
