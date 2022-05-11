import OngoingTask from "./components/OngoingTask";
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

  // maps over our data and passes it into the components 
  const taskList = inputData.map((item) => {
    return (
      <OngoingTask
        key={item.id}
        id={item.id}
        task={item.task}
        deleteTasks={deleteTasks}
      />
    );
  });

  // the function will take in id as a parameter and call it from the child component
  function deleteTasks(id) {
    let newdata= []
    for (let i = 0; i < inputData.length; i++) {
      if (id === inputData[i].id) {

      } else {
        newdata.push(inputData[i]);
      }
    }
    setInputData(newdata);
  }

  // adds task to the task list and somehow dosent work without the spread operator
  function AddTask() {
    if (inputBoxValue === "") {
    } else {
      const formData = [...inputData];
      formData.push({
        id: inputData.length + 1,
        task: inputBoxValue,
      });
      setInputData(formData);
    }
  }

  // consistently updates the input data as the user changes it
  function updateInput(event) {
    setinputBoxValue(event.target.value);
  }

  return (
    <div>
      <Header />
      <ul>{taskList}</ul>
      <Input updateInput={updateInput} addTask={AddTask} />
    </div>
  );
}
