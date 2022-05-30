
export default function Input(props) {
  return (
    <div className="bg-yellow-500">
      <div className="text-center bg-yellow-500 p-2 flex justify-center gap-3 w-1/2 m-auto">
        <input
          placeholder="Enter new task"
          className="flex-auto w-32 rounded-sm border border-black"
          onKeyPress={props.handleKeyPress}
          type="text"
          id="input--box"
          onChange={props.updateInput}
        />
        <button
          className="flex-1 bg-green-700 rounded-md py-0.5"
          id="add--task"
          onClick={props.addTask}
        >
          Add Task
        </button>
        <button
          className="flex-1 bg-purple-700 rounded-md py-0.5"
          onClick={props.toggleCompletedTasks}
        >
          Toggle Completed
        </button>
        <button
          className="flex-1 bg-blue-700 rounded-md py-0.5"
          onClick={props.toggleDeletedTasks}
        >
          Toggle Deleted
        </button>
      </div>
    </div>
  );
}
