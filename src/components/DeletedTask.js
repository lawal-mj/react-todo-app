export default function DeletedTask(props) {
  return (
    <div>
      <ul className="main--item">

        <li>
          {props.task}
          <button onClick={() => props.restore(props.id)} className="button--restore">Restore</button>
          <button onClick={() => props.premDelete(props.id)} className="button--perm--delete">Permanent delete</button>
        </li>
      </ul>
    </div>
  );
}
