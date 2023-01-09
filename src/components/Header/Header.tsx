import React from "react";
import ISoursIMG from "./IHeader";

const Header = ({ srcOne, srcTwo }: ISoursIMG): React.ReactElement => {
  const cartCount = 0;
  const basketCount = 0;

  return (
    <header className="header__container">
      <div>
        {/* <img
          src={srcOne}
          alt="logo-store"
        /> */}
        <p>Online-store</p>
      </div>
      <p>Cart total: {cartCount}</p>
      <div className="basket__container">
        <img
          className="header_basket"
          src={srcTwo}
          alt="basket"
        />
        <span className="basket__count">{basketCount}</span>
      </div>
    </header>
  );
};

export default Header;
