import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

const taskList = []

const taskData = {
  input: "",
}

export default function App() {
  const [inputData, setInputData] = useState();



  function updateInput(e) {
    const target = e.target;
    setInputData(function (prevData) {
      return {
        ...prevData,
        input: target.value,
      };
    });
  }



  function AddTask(e) {
    e.preventDefault();
    taskList.push(inputData.input)
  }



  console.log(taskList)


  return (
    <div>
      <Header />

      <Input hasChanged={updateInput} addButton={AddTask} />

      <Task />
    </div>
  );
}
