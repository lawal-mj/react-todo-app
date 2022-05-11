export default function ToggleDeletedButton(props){
    return(
        <button onClick={props.toggle} className="button--toggle--deleted">
                Toggle deleted
        </button>
    )
}