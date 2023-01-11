import React, { useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import gitLogo from "../asset/svg/github.svg";
import rssLogo from "../asset/svg/rs_school_js.svg";
import cart from "../asset/img/cart.png";
import IProducts from "../components/Main/IMain";

const App = (): React.ReactElement => {
  const [basketArr, setBasketArr] = useState<IProducts[]>([]);
  const [basketComponent, setBasketComponent] = useState(false);

  return (
    <div className="App">
      <Header
        srcOne=""
        srcTwo={cart}
        basketArr={basketArr}
        setBasketComponent={setBasketComponent}
      />
      <Main
        setBasketArr={setBasketArr}
        basketArr={basketArr}
        basketComponent={basketComponent}
      />
      <Footer
        srcOne={rssLogo}
        srcThree={gitLogo}
      />
    </div>
  );
};

export default App;
