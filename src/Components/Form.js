import "./Form.css";
import React, { useState } from "react";
import Users from "./Users";
const Form = (props) => {
  const [userInput, setUserInput] = useState("");
  const [AgeInput, setAgeInput] = useState("");

  const userInputHandler = (e) => {
    const enteredUsernameInput = e.target.value;
    setUserInput(enteredUsernameInput);
  };
  const ageInputHandler = (e) => {
    const enteredAgeInput = e.target.value;
    setAgeInput(enteredAgeInput);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (userInput.trim().length === 0 || AgeInput.trim().length === 0) {
      return;
    }
    if (AgeInput.trim().length < 1) {
      return;
    }
    props.onAddUser(userInput, AgeInput);
    setUserInput("");
    setAgeInput("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmitHandler}>
        <label>
          <h3>Username</h3>
        </label>
        <input
          type="text"
          onChange={userInputHandler}
          value={userInput}
        ></input>
        <label>
          <h3>Age (Years)</h3>
        </label>
        <input
          type="number"
          min="1"
          max="120"
          step="1"
          value={AgeInput}
          onChange={ageInputHandler}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Form;
