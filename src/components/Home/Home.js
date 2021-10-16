import React from "react";
// import { FORM_LINK } from "../../constants/links";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="content home">
        <div className="home-content">
          <div className="title-container">
            <h1 className="title">APB 7.0</h1>
          </div>
          <div className="divider"></div>
          <p>Oktober 2021 - November 2021</p>
          <div className="home-btn-container"></div>
        </div>
        <img
          className="left-island"
          src={`${process.env.PUBLIC_URL}/assets/pulau-kiri.png`}
          alt="pulau-kiri"
        />
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/atas_polos.png`} alt="Home" />
      <img
        className="sun"
        src={`${process.env.PUBLIC_URL}/assets/matahari.png`}
        alt="matahari"
      />
      <img
        className="ships"
        src={`${process.env.PUBLIC_URL}/assets/kapal terbang.png`}
        alt="kapal-terbang"
      />
      <img
        className="right-island"
        src={`${process.env.PUBLIC_URL}/assets/pulau-kanan.png`}
        alt="pulau-kanan"
      />
    </section>
  );
};

export default Home;
