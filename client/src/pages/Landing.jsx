import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import { Wrapper } from "../assets/wrappers/LandingPage.jsx";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Jobify Logo" className="logo" />
      </nav>
      {/* Info */}
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            dolorem ducimus error illo molestiae nihil, pariatur vitae? Expedita
            magnam natus nobis, praesentium quidem ut voluptas. Blanditiis harum
            perferendis quo reiciendis.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        {/* Image */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
