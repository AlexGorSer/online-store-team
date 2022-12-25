import React from "react";
import ISoursIMG from "./IHeader";

const Header = ({ srcOne, srcTwo }: ISoursIMG): React.ReactElement => {
  const cartCount = 0;
  const basketCount = 0;

  return (
    <header className="header__container">
      <img
        src={srcOne}
        alt="logo-store"
      />
      <p>Cart total: {cartCount}</p>
      <div>
        <img
          src={srcTwo}
          alt="basket"
        />
        <span>{basketCount}</span>
      </div>
    </header>
  );
};

export default Header;
