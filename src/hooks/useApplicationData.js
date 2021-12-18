import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  // useState declarations for the data necessary to populate the components.
  // Application.js requires the custom hooks here!
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  // Function sets the day state (used for select which day of appointments to display)
  const setDay = (day) => setState({ ...state, day });

  function updateSpots(id) {
    axios.get("/api/days")
    .then(response => {
      setState(prev => 
        ({ ...prev, days: response.data}))
    })
  }
  
  // Function adds a new appointment to the database through axios.
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => {
        setState({
          ...state,
          appointments
        })
        updateSpots(id)
      })
  }
  
  // Function deletes an appointment from the database through axios.
  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`, id)
      .then(() => {
        setState({
        ...state
      })
      updateSpots(id)
    })
  }
  
  // Side effect function that retrieves data from the database with a promise.all statement + axios.
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, [])

  return {state, setDay, bookInterview, cancelInterview}

};
