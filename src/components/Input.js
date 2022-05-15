export default function Input(props) {
  return (
    <div className="">
      <input onKeyPress={props.handleKeyPress} type="text" id="input--box" onChange={props.updateInput} />
      <button className="button--add" id="add--task" onClick={props.addTask}>
        Add Task
      </button>
      <button onClick={props.toggleCompletedTasks}> Toggle Completed </button>
      <button onClick={props.toggleDeletedTasks}> Toggle Deleted </button>
    </div>
  );
}




