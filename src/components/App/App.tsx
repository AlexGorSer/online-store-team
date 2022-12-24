import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = (): React.ReactElement => {
  // Вместо 'one' можно поставить ссылку на картинку
  // Если в качестве строки то в кавычки ""
  // Если в качестве переменной то в {} без кавычек
  // Пример srcOne="one" или srcOne={переменная}

  return (
    <section className="App">
      <Header
        srcOne="one"
        srcTwo="one"
      />
      <Footer
        srcOne="one"
        srcTwo="one"
        srcThree="one"
      />
    </section>
  );
};

export default App;
