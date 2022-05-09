export default function Input(props) {
  return (
    <div className="task-head">
      <input
        placeholder="Enter new task"
        className="input"
        type="text"
        onChange={props.update}
      />
      <button className="task-button" onClick={props.addTask}>
        Add
      </button>
    </div>
  );
}
