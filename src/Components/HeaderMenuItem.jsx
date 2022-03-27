import React from "react";

export const HeaderMenuItem = (props) => {
  const HandleClick = () => {
    props.onChangeActivePage(props.menuText);
  };

  return (
    <li>
      <a
        onClick={HandleClick}
        className={`headeranchor ${
          props.activePage === props.menuText ? " active" : ""
        }`}
        href="#"
      >
        {props.menuText}
      </a>
    </li>
  );
};
