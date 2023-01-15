import React from "react";
import IFooterIMG from "./IFooter";

const Footer: React.FC<IFooterIMG> = ({ srcOne, srcThree }) => {
  return (
    <footer className="footer__container">
      <div>
        <img
          className="git-logo"
          src={srcThree}
          alt="Github"
        />
      </div>
      <p>Online Store 2023</p>
      <div>
        <img
          className="rss-logo"
          src={srcOne}
          alt="Rss-logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
