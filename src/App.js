import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  function updateInput(event) {
    setInputValue(event.target.value);
  }

  console.log(inputValue);

  return (
    <div className="container-fluid todo-container">
      <Header />
      <Input update={updateInput} />
      <Task />
    </div>
  );
}
