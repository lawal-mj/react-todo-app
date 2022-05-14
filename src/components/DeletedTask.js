export default function DeletedTask(props) {
    return (
      <ul>
        <li>
          {props.task}
          <button>Restore</button>
          <button>Permanent delete</button>
          </li>
      </ul>
    );
  }
  