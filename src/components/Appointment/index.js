import React from "react";
import "components/Appointment/styles.scss";

import useVisualMode from "hooks/useVisualMode";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

export default function Appointment(props) {

  // Declaration for all our possible modes. Renders different components + props depending on 
  // the current mode at render.
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const REMOVING = "REMOVING";
  const REMOVE = "REMOVE";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE"
  const ERROR_REMOVE = "ERROR_REMOVE"

  // Our functions for the mode state that lets us navigate through different modes.
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  // Save function allows the user to save and delete appointments. Works with the Application.js
  //(bookInterview/cancelInterview functions) and the Form.js(Inputted name/interviewer data) to work.
  function save(name, interviewer) {
    
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function remove(id) {

    transition(REMOVING, true);

    props.cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_REMOVE, true));
  }

  // render for Appointment
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(REMOVE)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form 
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === EDIT && (
        <Form 
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
      />
      )}
      {mode === REMOVE && (
        <Confirm message={"Are you sure you would like to delete?"} onConfirm={() => remove(props.id)} onCancel={back}/>
      )}
      {mode === SAVING && (
        <Status message={"Saving"}/>
      )}
      {mode === REMOVING && (
        <Status message={"Removing"}/>
      )}
      {mode === ERROR_SAVE && (
        <Error message={"Could not save appointment"} onClose={back}/>
      )}
      {mode === ERROR_REMOVE && (
        <Error message={"Could not remove appointment"} onClose={back}/>
      )}
    </article>
  )
}