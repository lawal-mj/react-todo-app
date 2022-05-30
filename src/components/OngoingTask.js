export default function OngoingTask(props) {
  return (
    
    <ul className="my-1  w-full text-center">
      <li>
       <span className="text-xl"> {props.task}</span>
        <button
          className="ml-3 mr-2 bg-red-500 px-3 rounded-md"
          onClick={() => props.deleteTasks(props.id)}

        >
          Delete
        </button>

        <button onClick={() => props.completeTask(props.id)} className="mx-2 bg-yellow-500 px-3 rounded-md">
          Completed

        </button>
      </li>
    </ul>
  );
}
