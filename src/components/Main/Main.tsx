import React, { useEffect, useState } from "react";

import Filter from "./Filter/Filter";
import IProducts from "./IMain";
import ProductBlock from "./Products/Products";

const GOODS__URL = "https://dummyjson.com/products?limit=100";

const Main: React.FC = () => {
  const [goodsArray, setGoodsArray] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategoryArr] = useState<string[]>([]);
  const [brand, setCBrandArr] = useState<string[]>([]);

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
      />
    </main>
  );
};

export default Main;
