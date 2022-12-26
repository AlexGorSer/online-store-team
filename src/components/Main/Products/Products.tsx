import React from "react";

const ProductBlock = (): React.ReactElement => {
  return (
    <section className="products__container">
      <div className="header__products">
        <select
          name=""
          id=""
        >
          <option value="">test</option>
        </select>
        <p>Found: 0</p>
        <input
          type="search"
          name=""
          id=""
        />
        <div>
          <button>One</button>
          <button>Two</button>
        </div>
      </div>
      <div>
        <ProductsCard />
      </div>
    </section>
  );
};

const ProductsCard = (): React.ReactElement => {
  return (
    <div className="card__container">
      <h3>Name</h3>
      <div className="info__card__container">
        <span>Category</span>
        <span>Brand</span>
        <span>Price</span>
        <span>Discount</span>
        <span>Rating</span>
        <span>Stock</span>
      </div>
      <div className="buttons">
        <button>Add to cart</button>
        <button>Details</button>
      </div>
    </div>
  );
};

export default ProductBlock;
