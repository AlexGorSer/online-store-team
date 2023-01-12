import React, { ChangeEventHandler, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import gitLogo from "../asset/svg/github.svg";
import rssLogo from "../asset/svg/rs_school_js.svg";
import cart from "../asset/img/cart.png";
import IProducts from "../components/Main/IMain";

import { Modal } from "./../components/ModalForm/Modal";

const App = (): React.ReactElement => {
  const [basketArr, setBasketArr] = useState<IProducts[]>([]);
  const [basketComponent, setBasketComponent] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      {modal && <Modal setModal={setModal} />}
      <Header
        srcOne=""
        srcTwo={cart}
        basketArr={basketArr}
        setBasketComponent={setBasketComponent}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              setBasketArr={setBasketArr}
              basketArr={basketArr}
              basketComponent={basketComponent}
              setModal={setModal}
            />
          }
        />
      </Routes>
      <Footer
        srcOne={rssLogo}
        srcThree={gitLogo}
      />
    </div>
  );
};

export default App;
