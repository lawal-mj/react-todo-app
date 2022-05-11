export default function Task(props){
  return (
    <li>{props.task} <button className="button--delete" onClick={() => props.deleteTasks(props.id)}>Delete</button></li>
  )
  
}