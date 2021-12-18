import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button(props) {

  // Logical opertor that displays a class declared on the left if the statement on the right 
  // is true. Otherwise just "button" is the class.
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });

  // render for button
  return (
    <button className={buttonClass}onClick={props.onClick}disabled={props.disabled}>
      {props.children}
    </button>
  );
} 