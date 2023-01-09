export default interface IFilterCheckboxes {
  filterName: string;
  categoryArr: string[];
  setCategoryArr(element: string[]): void;
  category: string[];
}
