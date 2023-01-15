import React from "react";
import { IBasketModal } from "./IBasket";
import { BasketGoods } from "./BasketGoods";

export const BasketModal: React.FC<IBasketModal> = ({
  basketArr,
  setBasketArr,
  setModal,
}) => {
  return (
    <div className="basket__container-modal">
      {!!basketArr.length ? (
        <BasketGoods
          basketArr={basketArr}
          setBasketArr={setBasketArr}
          setModal={setModal}
        />
      ) : (
        <div>
          <p>корзина пуста</p>
        </div>
      )}
    </div>
  );
};
