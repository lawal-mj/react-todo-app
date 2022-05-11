import { useEffect, useState } from "react";
// components
import OngoingTask from "./components/OngoingTask";
import Input from "./components/Input";
import Header from "./components/Header";
import CompletedTask from "./components/CompletedTask";
import ToggleCompletedButton from "./components/ToggleCompletedButton";

export default function App() {
  const [toggleCompleted, setToggleCompleted] = useState(false);

  // maintains the state of the input box
  const [inputBoxValue, setinputBoxValue] = useState("");

  // maintains the state of the task data list, i'll use it later to edit tasks, gives default task example
  const [inputData, setInputData] = useState([
    {
      id: 1,
      task: "Example Task",
    },
  ]);

  const [completedList, setCompletedList] = useState([]);

  // maps over our task data and passes it into the components
  const taskList = inputData.map((item) => {
    return (
      <OngoingTask
        key={item.id}
        id={item.id}
        task={item.task}
        deleteTasks={deleteTasks}
        completeTask={completeTask}
      />
    );
  });

  function enterKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      AddTask();
    }
  }

  // maps completed tasks to the list
  const completedTaskList = completedList.map((item) => {
    return <CompletedTask task={item.task} key={item.id} />;
  });

  // the function will take in id as a parameter and call it from the child component
  function deleteTasks(id) {
    let newdata = [];
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

  // toggles the button that displays the completed tasks
  function toggleCompletedTaskView() {
    setToggleCompleted(!toggleCompleted);
  }

  // consistently updates the input data as the user changes it
  function updateInput(event) {
    setinputBoxValue(event.target.value);
  }

  // removes completed tasks from the main list and adds them to the completed list
  function completeTask(id) {
    let newdata = [];
    let completed = [...completedList];
    for (let i = 0; i < inputData.length; i++) {
      if (id === inputData[i].id) {
        completed.push(inputData[i]);
      } else {
        newdata.push(inputData[i]);
      }
    }
    setCompletedList(completed);
    setInputData(newdata);
  }

  return (
    <div>
      <Header />
      <ul>{taskList}</ul>
      <Input
        updateInput={updateInput}
        addTask={AddTask}
        handleKeyPress={enterKeyPress}
      />
      <ToggleCompletedButton toggle={toggleCompletedTaskView} />
      {toggleCompleted && completedTaskList}
    </div>
  );
}
