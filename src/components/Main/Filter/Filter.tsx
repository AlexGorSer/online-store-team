import React, { useState } from "react";
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

  const [checkboxData, setCheckBoxData] = useState<object>({
    smartphones: true,
    test: true,
  });
  console.log(checkboxData);
  return (
    <div className="filter__checkboxes">
      <p>{filterName}</p>
      <div>
        <input
          onChange={(e) =>
            setCheckBoxData({
              ...checkboxData,
              ...{ smartphones: e.target.checked },
            })
          }
          id="smartphones"
          type="checkbox"
          value="smartphones"
        />
        <label htmlFor="smartphones">smartphones</label>
      </div>
    </div>
  );
};

export default Filter;
