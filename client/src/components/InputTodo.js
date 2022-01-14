//using reactHooks with useState
import React, { Fragment, useState } from "react";
//className is utilized to style
const InputTodo = () => {
  
  const [description, setDescription] = useState("") //set default value to empty string

  
  const onSubmitForm = async(event) => {
    //we don't want this to refresh
    event.preventDefault();
    try {
      //set request
      const body = { description }; //need to add category etc than simple description
      //we are trying to add data
      
      //when you are making a fetch request, it is going to take some time, so remember to use AWAIT
      const response = await fetch("http://localhost:8080/todos", {
        method: "POST", //by default GET, so we need to change it
        headers: { "Content-Type": "application/JSON" }, //we are sending JSON data 
        body: JSON.stringify(body)
    });
    
    window.location = "/"; //once changes are made, the page will refresh
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    < Fragment >
      <h1 className="text-center mt-5">Get These Done</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={description} onChange={event => setDescription(event.target.value)}/>
          <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;