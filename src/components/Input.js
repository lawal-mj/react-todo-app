export default function Input(props) {
  return (
    <div>
      <input type="text" onChange={props.updateInput} />
      <button className="button--add" onClick={props.addTask}>Add Task</button>
    </div>
  );
}
