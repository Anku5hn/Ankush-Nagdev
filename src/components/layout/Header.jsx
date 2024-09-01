import React from "react";
const Header = (props) => {
  return (
    <>
      <div className="header-container" >
        <h2 style={props.heading}>
          THE <span className="header--product" style={props.product}>PRODUCT</span> PLATFORM
        </h2>
      </div>
    </>
  );
};
export default Header;