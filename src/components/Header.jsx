import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="logo header__btn">
          <span className="txt">armor</span>
        </div>

        <div className="rp">
          <button className="header__btn">Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
