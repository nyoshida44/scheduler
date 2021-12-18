import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {

  // parsedDays is a series of DayListItem components for each day/element of the props.days array.
  const parsedDays = props.days.map(day => 
  <DayListItem 
    key={day.id} 
    name={day.name} 
    spots={day.spots} 
    selected={day.name === props.day}
    setDay={props.setDay}
  ></DayListItem>);
  
  // render for DayList
  return(
    <ul>
      {parsedDays}
    </ul>
  )
}