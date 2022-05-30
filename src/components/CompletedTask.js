export default function CompletedTask(props) {
  return (

    <div>
      <ul className="main--item">
        <li>{props.task} <button onClick={() => props.revert(props.id)} className="button--uncompleted">uncomplete</button></li>
      </ul>
    </div>
  );
}
