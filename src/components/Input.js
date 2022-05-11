export default function Input(props) {
  return (
    <div>
      <input onKeyPress={props.handleKeyPress} type="text" id="input--box" onChange={props.updateInput} />
      <button className="button--add" id="add--task" onClick={props.addTask}>
        Add Task
      </button>
    </div>
  );
}

// let input = document.getElementById("myInput");
// input.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     // Trigger the button element with a click
//     
//   }
// });



