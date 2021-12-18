import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  // Logical opertor that displays a class declared on the left if the statement on the right 
  // is true. Otherwise just "interviewers__item" is the class.
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  // render for InterviewerListItem
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && <h3 className="text--light">{props.name}</h3>}
    </li>
  )
}