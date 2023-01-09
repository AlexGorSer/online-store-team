import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import gitLogo from "../asset/svg/github.svg";
import rssLogo from "../asset/svg/rs_school_js.svg";
import cart from "../asset/img/cart.png";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Header
        srcOne=""
        srcTwo={cart}
      />
      <Main />
      <Footer
        srcOne={rssLogo}
        srcThree={gitLogo}
      />
    </div>
  );
};

export default App;
