import Task from "./components/Task";
import Input from "./components/Input";
import { useState } from "react";

const taskObjects = [
  {
    id:1,
    task: "Example Task",
  }
]

export default function App() {


  const [ inputBoxValue, setinputBoxValue ] = useState("")
  const [ inputData, setInputData ] = useState(taskObjects)

  const taskList = inputData.map((item) => {
      return <Task  key={item.id} id={item.id} task={item.task}/>

  })


  function AddTask(){
    const formData = inputData;
    const data = {
      id:inputData.length + 1,
      task:inputBoxValue
    }
    formData.push(data)

    setInputData(function(prevData){
        return formData
    })
    // updateInput()
    console.log(inputData)

  }



  function updateInput(event){
    setinputBoxValue(event.target.value)

  }






  return (
    <div>
      <ul>
        {taskList}
      </ul>
      <Input 
        updateInput = {updateInput}
        addTask= {AddTask}
      />
    </div>
  );
}
