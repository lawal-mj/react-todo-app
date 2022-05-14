export default function CompletedTask(props) {
  return (
    <ul>
      <li>{props.task} <button className="button--uncompleted">uncomplete</button></li>
    </ul>
  );
}
