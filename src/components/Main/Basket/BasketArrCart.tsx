import React, { useState } from "react";
import { IBasketArrCart } from "./IBasket";

export const BasketArrCart: React.FC<IBasketArrCart> = ({
  elem,
  index,
  setPrise,
  setProducts,
  findBasketArr,
  priseCount,
  productsCount,
  setBasketArr,
  basketArr,
}) => {
  const [totalCount, setTotalCount] = useState(1);

  return (
    <>
      <div className="basket__cart">
        <p>{index + 1}</p>
        <img
          src={elem.thumbnail}
          alt=""
        />
        <div className="basket__cart-description">
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
          <div className="basket__cart-rating">
            <p>{elem.rating}</p>
            <p>{elem.discountPercentage}</p>
          </div>
        </div>
        <div className="basket__cart-stock">
          <p>stock {elem.stock}</p>
          <div className="basket__cart-buttons">
            <button
              onClick={() => {
                if (totalCount !== findBasketArr(index)[0].stock) {
                  setTotalCount(totalCount + 1);
                  setPrise(priseCount + findBasketArr(index)[0].price);
                  setProducts(productsCount + 1);
                }
              }}
            >
              +
            </button>
            <p>{totalCount}</p>
            <button
              onClick={() => {
                if (totalCount > 1) {
                  setTotalCount(totalCount - 1);
                } else {
                  const arr = [...basketArr].filter(
                    (e) => e.id !== findBasketArr(index)[0].id
                  );
                  setBasketArr([...arr]);
                }

                setPrise(priseCount - findBasketArr(index)[0].price);
                setProducts(productsCount - 1);
              }}
            >
              -
            </button>
          </div>
          <p>price {elem.price}</p>
        </div>
      </div>
    </>
  );
};
