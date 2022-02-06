import React from "react";
import HeaderBannerImage from "../Category/book-icon.png";
export default function HeaderBannerac({ title, childern }) {
  return (
    <div className="header py-3">
      <div className="container ">
        <div className="text-dark text-start left-header ms-3">
          <img src={HeaderBannerImage} alt="img not found" />
          <h2>{title || childern}</h2>
        </div>
      </div>
    </div>
  );
}
