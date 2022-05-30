export default function DeletedTask(props) {
  return (
    <div>
      <ul className="my-1  w-full text-center">
        <li className="flex justify-between">
          <div>
            <span className="text-xl"> {props.task}</span>
          </div>

          <div>
            <button
              onClick={() => props.restore(props.id)}
              className="ml-3 mr-2 bg-red-500 px-3 rounded-md"
            >
              Restore
            </button>
            <button
              onClick={() => props.premDelete(props.id)}
              className="mx-2 bg-yellow-500 px-3 rounded-md"
            >
              Permanent delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
