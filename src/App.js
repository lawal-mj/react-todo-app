import Task from "./components/Task";
import Input from "./components/Input";
import { useState } from "react";

const dataList = [
  {
    id: 1,
    task: "Example Task",
  },
];

export default function App() {
  const [inputBoxValue, setinputBoxValue] = useState("");

  const [inputData, setInputData] = useState(dataList);

  const taskList = inputData.map((item) => {
    return <Task key={item.id} id={item.id} task={item.task} />;
  });

  function AddTask() {
    const formData = inputData;

    formData.push({
      id: inputData.length + 1,
      task: inputBoxValue,
    });
    setInputData(formData);
  }

  function updateInput(event){
      setinputBoxValue(event.target.value)
  }



  return (
    <div>
      <ul>{taskList}</ul>
      <Input updateInput={updateInput} addTask={AddTask} />
    </div>
  );
}
