import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

export default function InterviewerList(props) {

  // Esures that the interviewers data is an array as it 
  // is necessary to build parsedInterviewers below.
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

  // Similar to daylist. Maps over props.interviewers array to display each interviewer as a
  // InterviewerListItem.
  const parsedInterviewers = props.interviewers.map(interviewer => 
  <InterviewerListItem 
    key={interviewer.id} 
    name={interviewer.name}
    avatar={interviewer.avatar}
    selected={interviewer.id === props.value}
    setInterviewer={() => props.onChange(interviewer.id)}> 
  </InterviewerListItem>);

  //render for InterviewerList
  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewers}</ul>
    </section>
  )
}