import { useState } from "react";
// Task List Components.
import OngoingTask from "./components/OngoingTask";
import CompletedTask from "./components/CompletedTask";
import DeletedTask from "./components/DeletedTask";
// Other Button Components
import Input from "./components/Input";
import Header from "./components/Header";


//some random comment

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
      return <CompletedTask task={item.task} key={item.id} revert={revertCompletedTask} id={item.id} />;
   });


   // maps deleted tasks to the deleted task list
   const deletedTaskList = deletedList.map((item) => {
      return <DeletedTask task={item.task} key={item.id} id={item.id} restore={restoreDeleted} premDelete={permanentlyDeleteDeleted} />;
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

   //remooves tasks from the completed list and adds them back to the main list
   function revertCompletedTask(id) {
      let ongoing = [...inputData];
      let completed = [];
      for (let i = 0; i < completedList.length; i++) {
         if (id === completedList[i].id) {
            ongoing.push(completedList[i])
         } else {
            completed.push(completedList[i]);
         }
      }
      setCompletedList(completed);
      setInputData(ongoing);
   }



   // adds task to the main task list and somehow dosent work without the spread operator
   // ended up generating random id's because of other issues
   function AddTask() {
      if (inputBoxValue === "") {
      } else {
         const formData = [...inputData];
         formData.push({
            id: Math.floor(Math.random() * 1000000000),
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

   // restores tasks from the deleted list to the main list 
   function restoreDeleted(id) {
      let ongoing = [...inputData];
      let deleted = [];
      for (let i = 0; i < deletedList.length; i++) {
         if (id === deletedList[i].id) {
            ongoing.push(deletedList[i])
         } else {
            deleted.push(deletedList[i]);
         }
      }
      setDeletedList(deleted);
      setInputData(ongoing);
   }

   // permanentlyDeletes tasks from the deleted list 
   function permanentlyDeleteDeleted(id) {
      let newDelete = [];
      for (let i = 0; i < deletedList.length; i++) {
         if (id === deletedList[i].id) {

         } else {
            newDelete.push(deletedList[i]);
         }
      }
      setDeletedList(newDelete);
   }

   return (
      <div>
         <Header />
         <Input
            updateInput={updateInput}
            addTask={AddTask}
            handleKeyPress={enterKeyPress}
            toggleCompletedTasks={toggleCompletedTaskView}
            toggleDeletedTasks={toggleDeletedTaskView}
         />
         <div className="flex mx-7 my-3">
            <div className="flex-1 mx-2">
               <h1 className="text-2xl text-center font-bold">Ongoing Tasks</h1>
               {taskList}
            </div>

            {
               toggleCompleted &&
               <div className="flex-1 mx-2">
                  <h1 className="text-2xl text-center font-bold">Completed Tasks</h1>
                  {completedTaskList}
               </div>
            }

            {
               toggleDeleted &&
               <div className="flex-1 mx-2">
                  <h1 className="text-2xl text-center font-bold">Deleted Tasks</h1>
                  {deletedTaskList}
               </div>
            }

         </div>
      </div>
   );
}


