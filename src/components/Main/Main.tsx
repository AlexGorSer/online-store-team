import React, { useEffect, useState } from "react";

import Filter from "./Filter/Filter";
import { IProducts, IMain } from "./IMain";
import ProductBlock from "./Products/Products";
import { ProductCard } from "./Products/ProductCard";
import { BasketModal } from "./Basket/BasketModal";

const GOODS__URL = "https://dummyjson.com/products?limit=20";

const Main: React.FC<IMain> = ({
  setBasketArr,
  basketArr,
  basketComponent,
  setModal,
}) => {
  const [goodsArray, setGoodsArray] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategoryArr] = useState<string[]>([]);
  const [brand, setCBrandArr] = useState<string[]>([]);
  const [card, setCard] = useState(false);
  const [cardObj, setCrdObj] = useState<IProducts[]>([]);

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
      {card && (
        <ProductCard
          setCard={setCard}
          cardObj={cardObj}
          setBasketArr={setBasketArr}
          basketArr={basketArr}
          setModal={setModal}
        />
      )}
      {basketComponent && (
        <BasketModal
          basketArr={basketArr}
          setBasketArr={setBasketArr}
          setModal={setModal}
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
        setBasketArr={setBasketArr}
        basketArr={basketArr}
      />
    </main>
  );
};

export default Main;
