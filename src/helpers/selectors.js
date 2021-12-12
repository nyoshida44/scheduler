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