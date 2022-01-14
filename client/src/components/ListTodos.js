//useEffect will make a fetch request to the Restful API everytime this component is rendered
import React, { Fragment, useEffect, useState } from "react";

//we grab basic table from Bootstrap 4 link: https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_table_basic&stacked=h 

const ListTodos = () => {

  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:8080/todos/${id}`,
        { method: "DELETE" });


      //only return ones that meet this following condition
      setTodos(todos.filter(todo => todo.todo_id !== id));
    }
    catch (err) {
      console.error(err.message)
    }
  }
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/todos")
      //we will be getting JSON data back
      const jsonData = await response.json(); //this takes time as well, thus the await
      //we need to parse the data

      setTodos(jsonData);

    } catch (err) {
      console.error(err.message);
    }
  };

  //useEffect runs everytime the page is rendered
  useEffect(() => {
    getTodos();
  }, []); //[] is very important, so that useEffect does not keep making requests indefinitely literally and seriously. all jokes aside, this ensures useEffect only makes 1 request

  console.log(todos);

  return (
    < Fragment >
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* 
      <tr>
        <td>John</td>
        <td>Wong</td>
        <td>John.Wong.Best.Mentor.Person@example.com</td>
      </tr>
      */}

          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
};

export default ListTodos;