export default function CompletedTask(props) {
  return (
    <div>
      <ul className="my-1  w-full text-center">
        <li className="flex justify-between">
          <div>
            <span className="text-xl ml-auto"> {props.task}</span>
          </div>
          <div>
            <button
              onClick={() => props.revert(props.id)}
              className="ml-3 mr-2 bg-red-500 px-3 rounded-md"
            >
              uncomplete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
