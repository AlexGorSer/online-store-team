import { IProducts } from "../IMain";

export interface IBasketModal {
  basketArr: IProducts[];
  setBasketArr(arr: IProducts[]): void;
  setModal(e: boolean): void;
}
export type IBasketGoods = IBasketModal;

export interface IBasketArrCart {
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
