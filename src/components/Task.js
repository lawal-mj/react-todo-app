export default function Task(props) {
  return (
    <div>
      <div className="tasks">
        <div className="task--item">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="m-1 me-auto">
              <div className="fw-bold">
                {props.task}<button className="delete--task">Delete</button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}
