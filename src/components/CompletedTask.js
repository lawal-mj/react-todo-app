export default function CompletedTask(props) {
  return (

    <div>
      <h3>Completed Tasks</h3>

      <ul className="main--item">
        <li>{props.task} <button onClick={() => props.revert(props.id)} className="button--uncompleted">uncomplete</button></li>
      </ul>
    </div>
  );
}
