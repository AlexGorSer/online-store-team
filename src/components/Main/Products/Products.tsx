import React, { useEffect, useState } from "react";
import { IProducts } from "../IMain";
import { ProductsCard } from "./ProductsCard";

import {
  setFilterHandler,
  setSortArray,
  searchByInput,
  IData,
} from "./IProducts";

const ProductBlock: React.FC<IData> = ({
  data,
  isLoad,
  brand,
  category,
  setCrdObj,
  setCard,
  setBasketArr,
  basketArr,
}) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [cardsView, setCardsView] = useState(false);

  const [filteredArray, setFilteredArray] = useState<IProducts[]>([]);

  useEffect(() => {
    setFilteredArray(data);
  }, [data]);
  useEffect(() => {
    sortBy(data, sort, category, brand);
  }, [sort, search, category, brand]);

  const sortBy = (
    data: IProducts[],
    filterBy: string,
    arrayCategory: string[],
    arrayBrand: string[]
  ) => {
    const copyData = [...data];
    let sort: IProducts[] = [];

    sort = setFilterHandler(copyData, arrayCategory, "category");
    sort = setFilterHandler(sort, arrayBrand, "brand");
    sort = setSortArray(filterBy, sort);
    sort = searchByInput(search, sort);
    setFilteredArray(sort);
  };
  const findCardObj = (index: number) => {
    const obj = filteredArray.filter((_, inx) => inx === index);
    return obj;
  };
  return (
    <section className="products__container">
      <div className="header__products">
        <select
          name=""
          id=""
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="all">All</option>
          <option value="price-ASC">Sort by price ASC</option>
          <option value="price-DESC">Sort by price DESC</option>
          <option value="rating-ASC">Sort by rating ASC</option>
          <option value="rating-DESC">Sort by rating DESC</option>
          <option value="discount-ASC">Sort by discount ASC</option>
          <option value="discount-DESC">Sort by discount DESC</option>
        </select>
        <p>Found: {filteredArray.length}</p>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Введи название"
        />
        <div>
          <button onClick={() => setCardsView(false)}>Плитка</button>
          <button onClick={() => setCardsView(true)}>Список</button>
        </div>
      </div>
      <div className="cards__container">
        {isLoad ? (
          <h1>Loading</h1>
        ) : (
          filteredArray.map((elem, index) => (
            <ProductsCard
              prop={elem}
              key={elem.id}
              index={index}
              findCardObj={findCardObj}
              setCrdObj={setCrdObj}
              setCard={setCard}
              setBasketArr={setBasketArr}
              basketArr={basketArr}
              cardsView={cardsView}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ProductBlock;
