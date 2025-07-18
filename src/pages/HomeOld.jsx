import React from "react";

const Home = () => {
  return (
    <>
      {/* Header */}
      <div className="header">
        <h2 className="logo">armor</h2>

        <button className="menu__btn"></button>
      </div>

      {/* Home Page */}
      <div className="pHome1">
        {/* Hero Section */}
        <section className="sHero">
          <div className="inner">
            <h2 className="main__heading">armor</h2>
            <img src="/hero1.png" alt="" className="hero__img floating" />
          </div>

          <div className="overlay">
            <h2 className="heading"></h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
