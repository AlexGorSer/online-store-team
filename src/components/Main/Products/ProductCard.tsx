import React from "react";
import { IProductCard } from "./IProducts";

export const ProductCard: React.FC<IProductCard> = ({
  setCard,
  cardObj,
  setBasketArr,
  basketArr,
  setModal,
}) => {
  const str = ">>";
  return (
    <div className="card__modal">
      <div className="bread">
        <p
          className="store__active"
          onClick={() => setCard(false)}
        >
          STORE
        </p>
        <p>{str}</p>
        <p>{cardObj[0].category.toUpperCase()}</p>
        <p>{str}</p>
        <p>{cardObj[0].brand.toUpperCase()}</p>
        <p>{str}</p>
        <p>{cardObj[0].title.toUpperCase()}</p>
      </div>
      <div className="details__container">
        <h3>{cardObj[0].title}</h3>
        <div className="img__container">
          <img
            className="img_slide"
            src={cardObj[0].images[0]}
            alt=""
          />
          <img
            className="img_slide"
            src={cardObj[0].images[1]}
            alt=""
          />
          <img
            className="img_slide"
            src={cardObj[0].images[2]}
            alt=""
          />
        </div>
        <div className="description__container">
          <div>
            <h2>Description:</h2>
            <p>{cardObj[0].description}</p>
          </div>
          <div>
            <h2>Discount Percentage:</h2>
            <p>{cardObj[0].discountPercentage}</p>
          </div>
          <div>
            <h2>Rating:</h2>
            <p>{cardObj[0].rating}</p>
          </div>
          <div>
            <h2>Stock:</h2>
            <p>{cardObj[0].stock}</p>
          </div>
          <div>
            <h2>Brand:</h2>
            <p>{cardObj[0].brand}</p>
          </div>
          <div>
            <h2>Category:</h2>
            <p>{cardObj[0].category}</p>
          </div>
        </div>
        <div className="pay__container">
          <h2>€{cardObj[0].price}</h2>
          {basketArr.includes(cardObj[0]) ? (
            <button
              onClick={() => {
                const arr = [...basketArr].filter(
                  (e) => e.id !== cardObj[0].id
                );
                setBasketArr([...arr]);
              }}
            >
              DELETE
            </button>
          ) : (
            <button
              onClick={() => {
                if (!basketArr.includes(cardObj[0])) {
                  setBasketArr([...basketArr, ...cardObj]);
                }
              }}
            >
              ADD TO CARD
            </button>
          )}
          <button onClick={() => setModal(true)}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};
