import React from "react";
import { IProp } from "./IProducts";

export const ProductsCard: React.FC<IProp> = ({
  prop,
  index,
  findCardObj,
  setCrdObj,
  setCard,
  setBasketArr,
  basketArr,
  cardsView,
}) => {
  const {
    title,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = prop;

  return (
    <div className={cardsView ? "card__container-alt" : "card__container"}>
      <div
        className="back"
        style={{ background: `url(${thumbnail}) 0% 0% / cover` }}
      ></div>
      <h3>{title}</h3>
      <div className="info__card__container">
        <span>Category: {category}</span>
        <span>Brand: {brand}</span>
        <span>Price: {price}.00</span>
        <span>DiscountPercentage: {discountPercentage}</span>
        <span>Rating: {rating}</span>
        <span>Stock: {stock}</span>
      </div>
      <div className="buttons">
        {!basketArr.includes(findCardObj(index)[0]) ? (
          <button
            onClick={() => {
              if (!basketArr.includes(findCardObj(index)[0])) {
                setBasketArr([...basketArr, ...findCardObj(index)]);
              }
            }}
          >
            Add to cart
          </button>
        ) : (
          <button
            onClick={() => {
              const arr = [...basketArr].filter(
                (e) => e.id !== findCardObj(index)[0].id
              );
              setBasketArr([...arr]);
            }}
          >
            Delete
          </button>
        )}
        <button
          onClick={() => {
            setCrdObj(findCardObj(index));
            setCard(true);
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
};
