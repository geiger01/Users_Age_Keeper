import "./App.css";
import Form from "./Components/Form";
import Users from "./Components/Users";
import React, { useState } from "react";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (username, userAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <Form onAddUser={addUserHandler} />
      <Users users={usersList} />
    </div>
  );
}

export default App;
