import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

const App = (): React.ReactElement => {
  // Вместо 'one' можно поставить ссылку на картинку
  // Если в качестве строки то в кавычки ""
  // Если в качестве переменной то в {} без кавычек
  // Пример srcOne="one" или srcOne={переменная}

  return (
    <div className="App">
      <Header
        srcOne="one"
        srcTwo="one"
      />
      <Main />
      <Footer
        srcOne="one"
        srcTwo="one"
        srcThree="one"
      />
    </div>
  );
};

export default App;
