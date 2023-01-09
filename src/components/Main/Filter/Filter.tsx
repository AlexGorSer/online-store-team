import React, { useState } from "react";
import IFilterCheckboxes from "./Ifilter";
interface IFilter {
  categoryArr: string[];
  brandArr: string[];
}
const Filter: React.FC<IFilter> = (props): React.ReactElement => {
  const { categoryArr, brandArr } = props;
  // console.log(categoryArr, brandArr);
  return (
    <aside className="filter__container">
      <div className="button__container">
        <button>Reset Filters</button>
        <button>Copy link</button>
      </div>
      <div className="filter__blocks">
        <FilterCheckboxes
          filterName="Category"
          category={categoryArr}
        />
        <FilterCheckboxes
          filterName="Brand"
          category={brandArr}
        />
      </div>
    </aside>
  );
};

const FilterCheckboxes: React.FC<IFilterCheckboxes> = ({
  filterName,
  category,
}) => {
  const [checkboxData, setCheckBoxData] = useState<string[]>([]);

  console.log(checkboxData);

  return (
    <div className="filter__checkboxes">
      <p>{filterName}</p>
      {category.map((elem, indx) => (
        <div key={indx}>
          <input
            onChange={(e) =>
              e.target.checked
                ? setCheckBoxData([...checkboxData, e.target.value])
                : setCheckBoxData(
                    checkboxData.filter((elem) => e.target.value !== elem)
                  )
            }
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
