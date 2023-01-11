import React, { useEffect, useState } from "react";
import IProducts from "../IMain";
import { setFilterHandler, setSortArray, searchByInput } from "./IProducts";

interface IData {
  data: IProducts[];
  isLoad: boolean;
  brand: string[];
  category: string[];
  setCrdObj(e: IProducts[]): void;
  setCard(e: boolean): void;
  setBasketArr(e: IProducts[]): void;
  basketArr: IProducts[];
  // setSearch: (a: string) => void;
}
interface IProp {
  prop: IProducts;
  index: number;
  findCardObj(a: number): IProducts[];
  setCrdObj(e: IProducts[]): void;
  setCard(e: boolean): void;
  setBasketArr(e: IProducts[]): void;
  basketArr: IProducts[];
  cardsView: boolean;
}

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

const ProductsCard: React.FC<IProp> = ({
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
// "@types/react-router-dom": "^5.3.3",
