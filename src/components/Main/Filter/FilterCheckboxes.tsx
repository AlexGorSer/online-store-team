import React from "react";
import { IFilterCheckboxes } from "./IFilter";
export const FilterCheckboxes: React.FC<IFilterCheckboxes> = ({
  filterName,
  categoryArr,
  setCategoryArr,
  category,
}) => {
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
