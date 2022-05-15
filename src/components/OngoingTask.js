export default function OngoingTask(props) {
  return (
    <ul className="main--item">
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
    </ul>
  );
}
