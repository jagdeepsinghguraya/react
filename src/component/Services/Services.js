import React from "react";
import "./Services.css";
import data from "./Services-Api";
import Card from "./Card";

const services = () => {
  return (
    <>
      <section className="services top" id="services">
        <div className="container">
          <div className="heading text-center">
            <h4>Services</h4>
            <h2>Rendered by Me</h2>
          </div>

          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default services;
