import React from "react";
import { render } from "@testing-library/react";
import Application from "components/Application";
import Appointment from "components/Appointment/index";
import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

describe("Appointment", () => {

  it("renders without crashing", () => {
    render(<Application />);
  });

  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("renders without crashing", () => {
    render(<Confirm />);
  });

  it("renders without crashing", () => {
    render(<Empty />);
  });

  it("renders without crashing", () => {
    render(<Error />);
  });

  it("renders without crashing", () => {
    render(<Form 
      student={"Nick Yoshida"}
      interviewer={1}
      interviewers={interviewers}
    />);
  });

  it("renders without crashing", () => {
    render(<Header />);
  });

  it("renders without crashing", () => {
    render(<Show 
      student={"Lydia Miller-Jones"} 
      interviewer={interviewer}
    />);
  });

  it("renders without crashing", () => {
    render(<Status />);
  });

});