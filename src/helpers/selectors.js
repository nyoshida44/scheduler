// Selectors are functions that manipulate the data retrieved from axios to be returned
// in proper format to be used and acccesed as props by our React components.

export function getAppointmentsForDay(state, day) {
  let appointmentsArray;
  let returnArray = [];
  for (const eachDay in state.days) {
    if (state.days[eachDay].name === day) {
      appointmentsArray = state.days[eachDay].appointments
    }
  }
  for (const eachAppointment in state.appointments) {
    if (!appointmentsArray) {
      return returnArray;
    }
    appointmentsArray.forEach(element => {
      if (element === state.appointments[eachAppointment].id) {
        returnArray.push(state.appointments[eachAppointment])
      }
    });
  }
  return returnArray;
}

export function getInterviewersForDay(state, day) {
  let interviewersArray;
  const returnArray = [];
  for (const eachDay in state.days) {
    if (state.days[eachDay].name === day) {
      interviewersArray = state.days[eachDay].interviewers
    }
  }
  for (const eachInterviewer in state.interviewers) {
    if (!interviewersArray) {
      return returnArray;
    }
    interviewersArray.forEach(element => {
      if (element === state.interviewers[eachInterviewer].id) {
        returnArray.push(state.interviewers[eachInterviewer])
      }
    });
  }
  return returnArray;
}

export function getInterview(state, interview) {
  let returnObject = {};
  for (const eachInterviewer in state.interviewers) {
    if (!interview) {
      return null;
    }
    if (state.interviewers[eachInterviewer].id === interview.interviewer) {
      returnObject.student = interview.student
      returnObject.interviewer = state.interviewers[eachInterviewer]
    }
  }
  return returnObject;
}