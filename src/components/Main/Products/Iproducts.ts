import { IProducts } from "../IMain";

export const setFilterHandler = (
  data: IProducts[],
  array: string[],
  key: keyof IProducts
) => {
  let newArr: IProducts[] = [];

  if (!array.length) return data;

  array.forEach((e) => {
    const test = [...data].filter(
      (elem) => elem[key].toString().toLowerCase() === e.toLowerCase()
    );

    newArr = [...newArr, ...test];
  });
  return [...newArr];
};
export const setSortArray = (filterBy: string, arr: IProducts[]) => {
  switch (filterBy) {
    case "all":
      return [...arr];
    case "price-ASC":
      arr = [...arr].sort((a, b) => a.price - b.price);
      return [...arr];
    case "price-DESC":
      arr = [...arr].sort((a, b) => b.price - a.price);
      return [...arr];
    case "rating-ASC":
      arr = [...arr].sort((a, b) => a.rating - b.rating);
      return [...arr];
    case "rating-DESC":
      arr = [...arr].sort((a, b) => b.rating - a.rating);
      return [...arr];
    case "discount-ASC":
      arr = [...arr].sort(
        (a, b) => a.discountPercentage - b.discountPercentage
      );
      return [...arr];
    case "discount-DESC":
      arr = [...arr].sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );
      return [...arr];
    default:
      return [...arr];
  }
};

export const searchByInput = (value: string, array: IProducts[]) => {
  const test = [...array].filter((elem) =>
    elem.title.toString().toLowerCase().includes(value.toLowerCase())
  );
  return [...test];
};

export interface IData {
  data: IProducts[];
  isLoad: boolean;
  brand: string[];
  category: string[];
  setCrdObj(e: IProducts[]): void;
  setCard(e: boolean): void;
  setBasketArr(e: IProducts[]): void;
  basketArr: IProducts[];
}
export interface IProp {
  prop: IProducts;
  index: number;
  findCardObj(a: number): IProducts[];
  setCrdObj(e: IProducts[]): void;
  setCard(e: boolean): void;
  setBasketArr(e: IProducts[]): void;
  basketArr: IProducts[];
  cardsView: boolean;
}

export interface IProductCard {
  setCard(e: boolean): void;
  cardObj: IProducts[];
  setBasketArr(arr: IProducts[]): void;
  basketArr: IProducts[];
  setModal(e: boolean): void;
}
