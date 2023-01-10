import React from "react";
import IProducts from "../Main/IMain";
import IHeader from "./IHeader";

const Header: React.FC<IHeader> = ({ srcOne, srcTwo, basketArr }) => {
  const setCountArr = (arr: IProducts[] = basketArr) => {
    if (!arr.length) return 0;
    let cartCount = 0;

    arr.forEach((item) => {
      cartCount += item.price;
    });
    return cartCount;
  };

  return (
    <header className="header__container">
      <div>
        {/* <img
          src={srcOne}
          alt="logo-store"
        /> */}
        <p>Online-store</p>
      </div>
      <p>Cart total: {setCountArr()}.00</p>
      <div className="basket__container">
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
