import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

const taskList = [];

const taskData = [
  {
    input: "Example task",
    id: 1,
  },
];

export default function App() {
  // the value of the input box at the in stste
  const [inputValue, setInputValue] = useState("");

  // the data object that will contain all our tasks 
  const [inputData, setInputData] = useState(taskData);

  function updateinput(event) {
    setInputValue(event.target.value);
  }

  function AddTask(e) {
    const taskObject = {
      input: inputValue,
      id: taskData.length + 1,
    };
    e.preventDefault();
    taskData.push(taskObject);
  }

  return (
    <div>
      <Header />

      <Input hasChanged={updateinput} addButton={AddTask} />

      <Task />
    </div>
  );
}
