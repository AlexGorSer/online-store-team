import React from "react";
import { useSearchParams } from "react-router-dom";
import IFilterCheckboxes from "./IFilter";
interface IFilter {
  categoryArr: string[];
  brandArr: string[];
  setCategoryArr(element: string[]): void;
  setCBrandArr(element: string[]): void;
  category: string[];
  brand: string[];
}
const Filter: React.FC<IFilter> = (props): React.ReactElement => {
  const {
    categoryArr,
    brandArr,
    setCategoryArr,
    category,
    setCBrandArr,
    brand,
  } = props;
  // console.log(categoryArr, brandArr);
  return (
    <aside className="filter__container">
      <div className="button__container">
        <button
          onClick={() => {
            document
              .querySelectorAll<HTMLInputElement>(".input-checkbox")
              .forEach((e) => {
                e.checked = false;
              });
            setCategoryArr([]);
            setCBrandArr([]);
          }}
        >
          Reset Filters
        </button>
        <button>Copy link</button>
      </div>
      <div className="filter__blocks">
        <FilterCheckboxes
          filterName="Category"
          categoryArr={categoryArr}
          setCategoryArr={setCategoryArr}
          category={category}
        />
        <FilterCheckboxes
          filterName="Brand"
          categoryArr={brandArr}
          setCategoryArr={setCBrandArr}
          category={brand}
        />
      </div>
    </aside>
  );
};

const FilterCheckboxes: React.FC<IFilterCheckboxes> = ({
  filterName,
  categoryArr,
  setCategoryArr,
  category,
}) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const check = searchParams.get("checked") || "";

  // const hand = (e: React.ChangeEvent<HTMLInputElement>, elem: string) => {
  //   const check = e.target.checked;
  //   const param = { [elem]: "false" };
  //   if (check) param[elem] = "true";
  //   setSearchParams(param);
  // };
  return (
    <div className="filter__checkboxes">
      <p>{filterName}:</p>
      {categoryArr.map((elem, indx) => (
        <div key={indx}>
          <input
            className="input-checkbox"
            onChange={(e) => {
              e.target.checked
                ? setCategoryArr([...category, e.target.value])
                : setCategoryArr(
                    category.filter((elem) => e.target.value !== elem)
                  );
              // hand(e, elem);
            }}
            id={elem}
            type="checkbox"
            value={elem}
          />
          <label htmlFor={elem}>{elem}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
