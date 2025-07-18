import React from "react";

const Home = () => {
  return (
    <div className="pHome">
      {/* Hero Section */}
      <section className="sHero">
        <div className="top part">
          <div className="txt__box">
            <h2 className="main__heading">armor</h2>
          </div>

          <img src="/hero1.png" alt="" className="hero__img floating" />
        </div>
        <div className="bottom part">
          <h2 className="heading">
            Crown of <span className="orange__text">Sound</span>
          </h2>

          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptas.
          </p>

          <button className="cta">Explore</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
