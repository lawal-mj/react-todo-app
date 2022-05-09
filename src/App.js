import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

const todoList = [];

export default function App() {
  const [inputValue, setInputValue] = useState("todoList");

  function updateInput(event) {
    setInputValue((prevValue) => {
      return event.target.value;
    });
  }

  function addTask(event) {
    todoList.push(inputValue);
    console.log(todoList);
  }

  return (
    <div className="container-fluid todo-container">
      <Header />
      <Input update={updateInput} addTask={addTask} />
      <Task />
    </div>
  );
}
