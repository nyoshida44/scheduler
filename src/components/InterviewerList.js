import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

  const parsedInterviewers = props.interviewers.map(interviewer => <InterviewerListItem key={interviewer.id} {...props} {...interviewer} selected={props.interviewer === interviewer.id ? true : false}></InterviewerListItem>);

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewers}</ul>
    </section>
  )
}