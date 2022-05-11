export default function OngoingTask(props) {
  return (
    <li>
      {props.task}
      <button
        className="button--delete"
        onClick={() => props.deleteTasks(props.id)}
      >
        Delete
      </button>

      <button onClick={() => props.completeTask(props.id)} className="button--complete">
        Completed
        
      </button>
    </li>
  );
}
