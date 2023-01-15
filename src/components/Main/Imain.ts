export interface IProducts {
  [key: string]: string | number | boolean | string[];
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface IMain {
  setBasketArr(arr: IProducts[]): void;
  basketArr: IProducts[];
  basketComponent: boolean;
  setModal(e: boolean): void;
}
