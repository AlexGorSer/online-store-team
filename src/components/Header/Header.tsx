import React from "react";
import { IHeader, setCountArr } from "./IHeader";

const Header: React.FC<IHeader> = ({
  srcTwo,
  basketArr,
  setBasketComponent,
}) => {
  return (
    <header className="header__container">
      <div
        className="store"
        onClick={() => setBasketComponent(false)}
      >
        <p>Online-store</p>
      </div>
      <p>Cart total: {setCountArr(basketArr)}.00</p>
      <div
        className="basket__container"
        onClick={() => setBasketComponent(true)}
      >
        <img
          className="header_basket"
          src={srcTwo}
          alt="basket"
        />
        <span className="basket__count">{basketArr.length}</span>
      </div>
    </header>
  );
};

export default Header;
