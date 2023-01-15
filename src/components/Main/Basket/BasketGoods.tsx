import React, { useState } from "react";
import { IBasketGoods } from "./IBasket";
import { setCountArr } from "../../Header/IHeader";
import { BasketArrCart } from "./BasketArrCart";

export const BasketGoods: React.FC<IBasketGoods> = ({
  basketArr,
  setBasketArr,
  setModal,
}) => {
  const [priseCount, setPrise] = useState(setCountArr(basketArr));
  const [productsCount, setProducts] = useState(basketArr.length);

  const findBasketArr = (index: number) => {
    const obj = basketArr.filter((_, inx) => inx === index);
    return obj;
  };

  return (
    <div className="basket__cart-container">
      <div className="basket__cart-container-products">
        <div className="basket__cart-header">
          <p>Products in Cart</p>
          <p>Limit</p>
        </div>
        <>
          <div>
            {basketArr.map((elem, index) => (
              <BasketArrCart
                key={elem.id}
                elem={elem}
                index={index}
                setPrise={setPrise}
                setProducts={setProducts}
                priseCount={priseCount}
                productsCount={productsCount}
                findBasketArr={findBasketArr}
                basketArr={basketArr}
                setBasketArr={setBasketArr}
              />
            ))}
          </div>
          ;
        </>
      </div>
      <div className="summary_container">
        <p>Summary</p>
        <div className="summary">
          <p>products {productsCount}</p>
          <p>total: {priseCount}</p>
          <input
            type="search"
            name=""
            id=""
          />
          <button onClick={() => setModal(true)}>buy now</button>
        </div>
      </div>
    </div>
  );
};
