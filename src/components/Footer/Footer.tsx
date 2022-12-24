import React from "react";
import IFooterIMG from "./IFooter";

const Footer = (props: IFooterIMG): React.ReactElement => {
  const { srcOne, srcTwo, srcThree } = props;

  return (
    <footer className="footer__container">
      <div>
        <img
          src={srcOne}
          alt="Github"
        />
        <img
          src={srcTwo}
          alt="Github"
        />
      </div>
      <p>Online Store 2023</p>
      <div>
        <img
          src={srcThree}
          alt="Rss-logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
