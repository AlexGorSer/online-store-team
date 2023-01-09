import React, { useEffect, useState } from "react";
import IProducts from "../IMain";
import { setFilterHandler, setSortArray, searchByInput } from "./IProducts";

interface IData {
  data: IProducts[];
  isLoad: boolean;
  brand: string[];
  category: string[];

  // setSearch: (a: string) => void;
}
interface IProp {
  prop: IProducts;
}

const ProductBlock: React.FC<IData> = ({ data, isLoad, brand, category }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  // const arrCategory: string[] = ["smartphones"];
  // const arrBrand: string[] = ["Apple"];
  const [filteredArray, setFilteredArray] = useState<IProducts[]>([]);

  useEffect(() => {
    setFilteredArray(data);
  }, [data]);
  useEffect(() => {
    sortBy(data, sort, category, brand);
  }, [sort, search, category, brand]);

  // const setFilterHandler = (
  //   value: string,
  //   data: IProducts[],
  //   key: keyof IProducts
  // ) => {
  //   if (!value) {
  //     return setFilteredArray(data);
  //   } else {
  //     const newArr = [...data].filter((elem) =>
  //       elem[key].toString().toLowerCase().includes(value.toLowerCase())
  //     );
  //     return setFilteredArray(newArr);
  //   }
  // };

  // console.log(setFilterHandler(data, cater, "category"));

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
          placeholder="Название"
        />
        <div>
          <button>One</button>
          <button>Two</button>
        </div>
      </div>
      <div className="cards__container">
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
  const {
    title,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    // thumbnail,
  } = prop;

  return (
    <div className="card__container">
      <div
        className="back"
        // style={{ background: `url(${thumbnail}) 0% 0% / cover` }}
      ></div>
      <h3>{title}</h3>
      <div className="info__card__container">
        <span>Category: {category}</span>
        <span>Brand: {brand}</span>
        <span>Price: {price}</span>
        <span>DiscountPercentage: {discountPercentage}</span>
        <span>Rating: {rating}</span>
        <span>Stock: {stock}</span>
      </div>
      <div className="buttons">
        <button>Add to cart</button>
        <button>Details</button>
      </div>
    </div>
  );
};

export default ProductBlock;

// const fitterContent = (value = "") => {
//   if (!value) {
//     return data;
//   }
//   return data.filter((elem) => elem.brand === value);
// };

// const filterFunction = fitterContent(filter).filter((elem) =>
//   elem.title.toLowerCase().includes(search.toLowerCase())
// );
