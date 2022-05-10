export default function Input(props) {
  return (
    <div>
      <input type="text" onChange={props.updateInput} />
      <button onChange={props.updateInput} onClick={props.addTask}>Add Task</button>
    </div>
  );
}
