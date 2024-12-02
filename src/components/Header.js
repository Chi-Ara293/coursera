import React from "react";
import cat_loaf from "../assets/cat_loaf.png";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Welcome to My Website</h1>
      <img 
      src={cat_loaf} 
      alt="Cat Loaf"
      className="header-image"  />
    </div>
  );
};

export default Header;
