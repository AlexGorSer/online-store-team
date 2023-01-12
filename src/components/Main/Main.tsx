import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
import { setCountArr } from "../Header/IHeader";

import Filter from "./Filter/Filter";
import IProducts from "./IMain";
import ProductBlock from "./Products/Products";

// alert(
//   "Привет, я это задание делал один, не могли бы вы его проверить в последний день? Заранее спасибо!"
// );
const GOODS__URL = "https://dummyjson.com/products?limit=20";
interface IMain {
  setBasketArr(arr: IProducts[]): void;
  basketArr: IProducts[];
  basketComponent: boolean;
  setModal(e: boolean): void;
}

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

interface IProductCard {
  setCard(e: boolean): void;
  cardObj: IProducts[];
  setBasketArr(arr: IProducts[]): void;
  basketArr: IProducts[];
  setModal(e: boolean): void;
}
const ProductCard: React.FC<IProductCard> = ({
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

interface IBasketModal {
  basketArr: IProducts[];
  setBasketArr(arr: IProducts[]): void;
  setModal(e: boolean): void;
}

const BasketModal: React.FC<IBasketModal> = ({
  basketArr,
  setBasketArr,
  setModal,
}) => {
  return (
    <div className="basket__container-modal">
      {!!basketArr.length ? (
        <BasketGoods
          basketArr={basketArr}
          setBasketArr={setBasketArr}
          setModal={setModal}
        />
      ) : (
        <div>
          <p>корзина пуста</p>
        </div>
      )}
    </div>
  );
};
type IBasketGoods = IBasketModal;

const BasketGoods: React.FC<IBasketGoods> = ({
  basketArr,
  setBasketArr,
  setModal,
}) => {
  const [priseCount, setPrise] = useState(setCountArr(basketArr));
  const [productsCount, setProducts] = useState(basketArr.length);

  const findBasketArr = (index: number) => {
    const obj = basketArr.filter((_, inx) => inx === index);
    return obj;
  };

  // const [currentItems, setCurrentItems] = useState<IProducts[]>([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPages = 2;

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPages;
  //   setCurrentItems(basketArr.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(basketArr.length / itemsPerPages));
  // }, [itemOffset, basketArr, itemsPerPages]);

  // interface IEvent {
  //   selected: number;
  // }
  // const handlePageClick = (event: IEvent) => {
  //   console.log(event);
  //   const newOffset = (event.selected * itemsPerPages) % basketArr.length;
  //   setItemOffset(newOffset);
  // };
  return (
    <div className="basket__cart-container">
      <div className="basket__cart-container-products">
        <div className="basket__cart-header">
          <p>Products in Cart</p>
          <p>Limit</p>
          {/* <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="previous"
            // renderOnZeroPageCount={null}
          /> */}
        </div>
        <>
          <div>
            {basketArr.map((elem, index) => (
              <BasketArrCart
                key={elem.id}
                elem={elem}
                index={index}
                setPrise={setPrise}
                setProducts={setProducts}
                priseCount={priseCount}
                productsCount={productsCount}
                findBasketArr={findBasketArr}
                basketArr={basketArr}
                setBasketArr={setBasketArr}
              />
            ))}
          </div>
          ;
        </>
      </div>
      <div className="summary_container">
        <p>Summary</p>
        <div className="summary">
          <p>products {productsCount}</p>
          <p>total: {priseCount}</p>
          <input
            type="search"
            name=""
            id=""
          />
          <button onClick={() => setModal(true)}>buy now</button>
        </div>
      </div>
    </div>
  );
};
interface IBasketArrCart {
  elem: IProducts;
  index: number;
  setPrise(e: number): void;
  setProducts(e: number): void;
  findBasketArr(arr: number): IProducts[];
  priseCount: number;
  productsCount: number;
  basketArr: IProducts[];
  setBasketArr(arr: IProducts[]): void;
}
const BasketArrCart: React.FC<IBasketArrCart> = ({
  elem,
  index,
  setPrise,
  setProducts,
  findBasketArr,
  priseCount,
  productsCount,
  setBasketArr,
  basketArr,
}) => {
  const [totalCount, setTotalCount] = useState(1);

  return (
    <>
      <div className="basket__cart">
        <p>{index + 1}</p>
        <img
          src={elem.thumbnail}
          alt=""
        />
        <div className="basket__cart-description">
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
          <div className="basket__cart-rating">
            <p>{elem.rating}</p>
            <p>{elem.discountPercentage}</p>
          </div>
        </div>
        <div className="basket__cart-stock">
          <p>stock {elem.stock}</p>
          <div className="basket__cart-buttons">
            <button
              onClick={() => {
                if (totalCount !== findBasketArr(index)[0].stock) {
                  setTotalCount(totalCount + 1);
                  setPrise(priseCount + findBasketArr(index)[0].price);
                  setProducts(productsCount + 1);
                }
              }}
            >
              +
            </button>
            <p>{totalCount}</p>
            <button
              onClick={() => {
                if (totalCount > 1) {
                  setTotalCount(totalCount - 1);
                } else {
                  const arr = [...basketArr].filter(
                    (e) => e.id !== findBasketArr(index)[0].id
                  );
                  setBasketArr([...arr]);
                }

                setPrise(priseCount - findBasketArr(index)[0].price);
                setProducts(productsCount - 1);
              }}
            >
              -
            </button>
          </div>
          <p>price {elem.price}</p>
        </div>
      </div>
    </>
  );
};
