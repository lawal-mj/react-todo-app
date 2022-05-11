import { useState } from "react";
// Task List Components.
import OngoingTask from "./components/OngoingTask";
import CompletedTask from "./components/CompletedTask";
import DeletedTask from "./components/DeletedTask";
// Other Button Components
import Input from "./components/Input";
import Header from "./components/Header";
import ToggleCompletedButton from "./components/ToggleCompletedButton";
import ToggleDeletedButton from "./components/ToggleDeletedButton";




export default function App() {
  // buttons for toggling completed and deleted tasks 
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const [toggleDeleted, setToggleDeleted] = useState(false);

  // maintains the state of the input box
  const [inputBoxValue, setinputBoxValue] = useState("");

  // maintains the state of the main data list, used later on to edit tasks, provided with a default task
  const [inputData, setInputData] = useState([
    {
      id: 1,
      task: "Example Task",
    },
  ]);

  // state for the completed and deleted task lists
  const [completedList, setCompletedList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);


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

  // makes the enter key work when typing into the task input box 
  function enterKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      AddTask();
    }
  }

  // maps completed tasks to the completed task list
  const completedTaskList = completedList.map((item) => {
    return <CompletedTask task={item.task} key={item.id} />;
  });


  // maps deleted tasks to the deleted task list
  const deletedTaskList = deletedList.map((item) => {
    return <DeletedTask task={item.task} key={item.id} />;
  });


  // the function will take in id as a parameter and call it from the child component
  // it deletes tasks from the main list and adds them to the deleted task list 
  function deleteTasks(id) {
    let newdata = [];
    let tempDelete = [...deletedList];
    for (let i = 0; i < inputData.length; i++) {
      if (id === inputData[i].id) {
        tempDelete.push(inputData[i]);
        setDeletedList(tempDelete);
      } else {
        newdata.push(inputData[i]);
      }
    }
    setInputData(newdata);
  }



  // adds task to the main task list and somehow dosent work without the spread operator
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

  // toggles the button that displays the deleted tasks
  function toggleDeletedTaskView() {
    setToggleDeleted(!toggleDeleted);
  }

  // consistently updates the input data state as the user changes it
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
      <ToggleDeletedButton toggle={toggleDeletedTaskView} />
      {toggleDeleted && deletedTaskList}
    </div>
  );
}
