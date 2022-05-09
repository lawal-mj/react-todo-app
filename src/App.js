import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

const todoList = []

export default function App() {
  const [inputValue, setInputValue] = useState(todoList);

  function updateInput(event) {
    setInputValue(function(oldInput){
        return oldInput.push(event.target.value)
    });

  }
  // todoList.push(inputValue)
  console.log(todoList)

  // console.log(inputValue);

  return (
    <div className="container-fluid todo-container">
      <Header />
      <Input update={updateInput} />
      <Task />
    </div>
  );
}
