import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {

  // Logical opertor that displays a class declared on the left if the statement on the right 
  // is true. Otherwise just "day-list__item" is the class.
  const dayListItemClass = classNames("day-list__item" , {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  // Format spots is a basic if/else function which determines the message displayed for the
  // h3 "text--regular". which can be seen below in the render.
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots remaining";
    } else if (spots === 1) {
      return `${spots} spot remaining`;
    } else {
      return `${spots} spots remaining`
    }
  }

  // render for DayListItem.
  return (
    <li className={dayListItemClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li> 
  );
}