export default function Input(props) {
  return (
    <form action="">
      <div className="task-head">
        <input
          placeholder="Enter new task"
          className="input"
          type="text"
          onChange={props.hasChanged}
          id="input"
        />
        <button
          className="task-button"
          id="task-button"
          onClick={props.addButton}
        >
          Add
        </button>
      </div>
    </form>
  );
}
