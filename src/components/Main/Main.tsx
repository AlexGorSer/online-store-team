import React, { useEffect, useState } from "react";

import Filter from "./Filter/Filter";
import IProducts from "./IMain";
import ProductBlock from "./Products/Products";

const GOODS__URL = "https://dummyjson.com/products?limit=100";

const Main: React.FC = () => {
  const [goodsArray, setGoodsArray] = useState<IProducts[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GOODS__URL)
      .then((res) => res.json())
      .then((goods) => {
        setGoodsArray(goods.products);
      })
      .catch((error) => console.log(error.massage))
      .finally(() => setLoading(false));
  }, []);
  const arr: string[] = [];

  goodsArray.forEach((e) => {
    arr.push(e.category);
  });
  const set = new Set(arr);
  console.log([...set]);
  return (
    <main className="main__container">
      <Filter />
      <ProductBlock
        data={goodsArray}
        isLoad={loading}
      />
    </main>
  );
};

export default Main;
