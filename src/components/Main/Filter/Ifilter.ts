export interface IFilter {
  categoryArr: string[];
  brandArr: string[];
  setCategoryArr(element: string[]): void;
  setCBrandArr(element: string[]): void;
  category: string[];
  brand: string[];
}

export interface IFilterCheckboxes {
  filterName: string;
  categoryArr: string[];
  setCategoryArr(element: string[]): void;
  category: string[];
}
