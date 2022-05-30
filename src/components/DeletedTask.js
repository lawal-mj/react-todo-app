export default function DeletedTask(props) {
  return (
    <div>
      <ul className="my-1  w-full text-center">

        <li>
        <span className="text-xl"> {props.task}</span>
          <button onClick={() => props.restore(props.id)} className="ml-3 mr-2 bg-red-500 px-3 rounded-md">Restore</button>
          <button onClick={() => props.premDelete(props.id)} className="mx-2 bg-yellow-500 px-3 rounded-md">Permanent delete</button>
        </li>
      </ul>
    </div>
  );
}
