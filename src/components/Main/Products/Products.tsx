import React, { useEffect, useState } from "react";

import IProducts from "../IMain";

interface IData {
  data: IProducts[];
  isLoad: boolean;
  // setSearch: (a: string) => void;
}
interface IProp {
  prop: IProducts;
}
const ProductBlock: React.FC<IData> = ({ data, isLoad }) => {
  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("");
  const [filteredArray, setFilteredArray] = useState<IProducts[]>([]);

  useEffect(() => {
    setFilteredArray(data);
  }, [data]);

  const setFilterHandler = (
    value: string,
    data: IProducts[],
    key: keyof IProducts
  ) => {
    if (!value) {
      return setFilteredArray(data);
    } else {
      const newArr = [...data].filter((elem) =>
        elem[key].toString().toLowerCase().includes(value.toLowerCase())
      );
      return setFilteredArray(newArr);
    }
  };
  // const fitterContent = (value = "") => {
  //   if (!value) {
  //     return data;
  //   }
  //   return data.filter((elem) => elem.brand === value);
  // };

  // const filterFunction = fitterContent(filter).filter((elem) =>
  //   elem.title.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <section className="products__container">
      {/* <input
        onChange={(e) =>
          e.target.checked
            ? setFilterHandler(e.target.value, data, "category")
            : setFilterHandler("", data, "category")
        }
        type="checkbox"
        name=""
        id=""
        value="smartphones"
      /> */}
      <div className="header__products">
        <select
          name=""
          id=""
          onChange={(e) => setFilterHandler(e.target.value, data, "brand")}
        >
          <option value="">All</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
        </select>
        <p>Found: {filteredArray.length}</p>
        <input
          onChange={(e) => setFilterHandler(e.target.value, data, "title")}
          type="search"
          placeholder="Название"
        />
        <div>
          <button>One</button>
          <button>Two</button>
        </div>
      </div>
      <div>
        {isLoad ? (
          <h1>Loading</h1>
        ) : (
          filteredArray.map((elem) => (
            <ProductsCard
              prop={elem}
              key={elem.id}
            />
          ))
        )}
      </div>
    </section>
  );
};

const ProductsCard: React.FC<IProp> = ({ prop }) => {
  const { title, price, discountPercentage, rating, stock, brand, category } =
    prop;

  return (
    <div className="card__container">
      <h3>{title}</h3>
      <div className="info__card__container">
        <span>{category}</span>
        <span>{brand}</span>
        <span>{price}</span>
        <span>{discountPercentage}</span>
        <span>{rating}</span>
        <span>{stock}</span>
      </div>
      <div className="buttons">
        <button>Add to cart</button>
        <button>Details</button>
      </div>
    </div>
  );
};

export default ProductBlock;
