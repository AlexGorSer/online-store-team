import React from "react";
import { IFilter } from "./IFilter";
import { FilterCheckboxes } from "./FilterCheckboxes";

const Filter: React.FC<IFilter> = (props) => {
  const {
    categoryArr,
    brandArr,
    setCategoryArr,
    category,
    setCBrandArr,
    brand,
  } = props;

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

export default Filter;
