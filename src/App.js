import React from "react";
import Header from "./component/Head/Header";
import Services from "./component/Services/Services";
import Home from "./component/Hero/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
