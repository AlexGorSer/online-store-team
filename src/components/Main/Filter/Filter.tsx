import React from "react";
import IFilterCheckboxes from "./Ifilter";

const Filter = (): React.ReactElement => {
  return (
    <aside className="filter__container">
      <div className="button__container">
        <button>Reset Filters</button>
        <button>Copy link</button>
      </div>
      <div className="filter__blocks">
        <FilterCheckboxes filterName="Category" />
        <FilterCheckboxes filterName="Brand" />
      </div>
    </aside>
  );
};

const FilterCheckboxes = (props: IFilterCheckboxes): React.ReactElement => {
  const { filterName } = props;
  return (
    <div className="filter__checkboxes">
      <p>{filterName}</p>
      <div>
        <input
          type="checkbox"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default Filter;
