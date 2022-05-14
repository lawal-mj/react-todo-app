export default function CompletedTask(props) {
  return (
    <ul>
      <li>{props.task} <button onClick={() => props.revert(props.id)} className="button--uncompleted">uncomplete</button></li>
    </ul>
  );
}
