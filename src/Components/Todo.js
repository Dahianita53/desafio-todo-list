const Todo = (props) => {
    return (
        <div>
            <input type="checkbox" />
            <label>{props.children}</label>
            <span>
            <button onClick={props.onclickFn}>
            🗑️
            </button>
            </span>
        </div>
    )
}
export default Todo
