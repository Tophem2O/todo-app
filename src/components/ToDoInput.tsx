import type { ToDoInputProps } from "../types/toDoInput";
function ToDoInput(props: ToDoInputProps) {
    return (
        <>
            <input
                type="text"
                placeholder="Tasks to do."
                value={props.input}
                onChange={(e) => props.setInput(e.target.value)}
                onKeyDown={props.handleKeyDown}
                className=""
            />
            <button onClick={props.handleInput}>Add task</button>
        </>
    )
}

export default ToDoInput;