import React from "react";
import Filter from "./Filter/Filter";
import ProductBlock from "./Products/Products";

const Main = (): React.ReactElement => {
  return (
    <main className="main__container">
      <Filter />
      <ProductBlock />
    </main>
  );
};

export default Main;
