import React from "react";

import "./modal.scss";
interface IModal {
  setModal(e: boolean): void;
}
export const Modal: React.FC<IModal> = ({ setModal }) => {
  return (
    <div
      className="modal"
      onClick={() => setModal(false)}
    >
      <div className="modal-container">
        <form action="">
          <p>Personal details</p>
          <div className="modal_input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone number"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="address"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="E-mail"
            />
          </div>
          <div>
            <p>Credit card details</p>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};
