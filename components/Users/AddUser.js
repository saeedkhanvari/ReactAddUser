import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./Adduser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError(
        {
          title : 'Invalid Input',
          message : 'Pleas enter a valid name and age (non-empty values).'
        }
      )
    }
    if (+enteredUserAge < 1) {
      setError(
        {
          title : 'Invalid Input',
          message : 'Pleas enter a valid  age (0 < ).'
        }
      )
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error,setError] = useState()

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };
  
  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      {/* here (upline) means that if error has propery in it and its not undefind then ErrorModal will be render */}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          {/* htmlFor is for undrestanig wich label in for wich input */}
          <label htmlFor="userName">userName</label> 
          <input
            id="userName"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age(years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
