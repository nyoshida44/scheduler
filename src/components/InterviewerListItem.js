import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      {props.selected && <h3 className="text--light">Sylvia Palmer</h3>}
    </li>
  )
}