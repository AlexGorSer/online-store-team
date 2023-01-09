import React, { useEffect, useState } from "react";

import Filter from "./Filter/Filter";
import IProducts from "./IMain";
import ProductBlock from "./Products/Products";
alert(
  "Привет, я это задание делал один, не могли бы вы его проверить в последний день? Заранее спасибо!"
);
const GOODS__URL = "https://dummyjson.com/products?limit=100";

const Main: React.FC = () => {
  const [goodsArray, setGoodsArray] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategoryArr] = useState<string[]>([]);
  const [brand, setCBrandArr] = useState<string[]>([]);
  const [card, setCard] = useState(false);
  const [cardObj, setCrdObj] = useState<IProducts[]>([]);

  // console.log(card);
  const getArr = (key: keyof IProducts) => {
    const arr: string[] = [];
    goodsArray.forEach((e) => {
      arr.push(e[key].toString());
    });
    const set = new Set(arr.filter((e) => e !== "APPle"));
    return [...set];
  };
  const categoryArr: string[] = getArr("category");
  const brandArr: string[] = getArr("brand");
  // console.log(categoryArr, brandArr);

  useEffect(() => {
    fetch(GOODS__URL)
      .then((res) => res.json())
      .then((goods) => {
        setGoodsArray(goods.products);
      })
      .catch((error) => console.log(error.massage))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="main__container">
      {/* <button
        onClick={() => {
          card ? setCard(false) : setCard(true);
          document
            .querySelectorAll<HTMLInputElement>(".input-checkbox")
            .forEach((e) => {
              e.checked = false;
            });
          setCategoryArr([]);
          setCBrandArr([]);
        }}
      ></button> */}
      {card && (
        <ProductCard
          setCard={setCard}
          cardObj={cardObj}
        />
      )}
      <Filter
        categoryArr={categoryArr}
        brandArr={brandArr}
        setCategoryArr={setCategoryArr}
        category={category}
        setCBrandArr={setCBrandArr}
        brand={brand}
      />

      <ProductBlock
        data={goodsArray}
        isLoad={loading}
        brand={brand}
        category={category}
        setCrdObj={setCrdObj}
        setCard={setCard}
      />
    </main>
  );
};

export default Main;

interface IProductCard {
  setCard(e: boolean): void;
  cardObj: IProducts[];
}
const ProductCard: React.FC<IProductCard> = ({ setCard, cardObj }) => {
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
          <button>ADD TO CARD</button>
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};
