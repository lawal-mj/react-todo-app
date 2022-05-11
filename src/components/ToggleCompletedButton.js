export default function ToggleCompletedButton(props){
    return(
        <button onClick={props.toggle} className="button--toggle--completed">
                Toggle Completed
        </button>
    )
}