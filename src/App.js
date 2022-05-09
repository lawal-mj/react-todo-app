import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

const todoList = ["Example Task"];

export default function App() {
  const [inputValue, setInputValue] = useState("todoList");

  const TaskList = todoList.map((item) => {
    return <Task task={item} />;
  });

  function updateInput(event) {
    setInputValue((prevValue) => {
      return event.target.value;
    });
  }



  function addTask(event) {
    todoList.push(inputValue);
    setInputValue("")
  }

  return (
    <div className="container-fluid todo-container">
      <Header />
      <Input update={updateInput} addTask={addTask} />
      {TaskList}
    </div>
  );
}
