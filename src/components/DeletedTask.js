export default function DeletedTask(props) {
    return (
      <ul>
        <li>
          {props.task}
          <button className="button--restore">Restore</button>
          <button className="button--perm--delete">Permanent delete</button>
          </li>
      </ul>
    );
  }
  