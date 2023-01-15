import { IProducts } from "../Main/IMain";

export interface IHeader {
  srcOne: string;
  srcTwo: string;
  basketArr: IProducts[];
  setBasketComponent(e: boolean): void;
}

export const setCountArr = (arr: IProducts[]) => {
  if (!arr.length) return 0;
  let cartCount = 0;

  arr.forEach((item) => {
    cartCount += item.price;
  });
  return cartCount;
};
