import Task from "./components/Task";
import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";

// sample data list with an example task there
const dataList = [
  {
    id: 1,
    task: "Example Task",
  },
];

export default function App() {
  // maintains the state of the input box
  const [inputBoxValue, setinputBoxValue] = useState("");

  // maintains the state of the task dataList, i'll use it later to edit tasks
  const [inputData, setInputData] = useState(dataList);

  const taskList = inputData.map((item) => {
    return <Task key={item.id} id={item.id} task={item.task} />;
  });

  // adds task to the task list and somehow dosent work without the spread operator
  function AddTask() {
    const formData = [...inputData];
    formData.push({
      id: inputData.length + 1,
      task: inputBoxValue,
    });
    setInputData(formData);
  }

  // consistently updates the input data as the user changes it
  function updateInput(event) {
    setinputBoxValue(event.target.value);
  }

  return (
    <div>
      <Header />
      <Input updateInput={updateInput} addTask={AddTask} />
      <ul>{taskList}</ul>
    </div>
  );
}
