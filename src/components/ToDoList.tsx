import type { ToDoListProps } from "../types/ToDoList";

function ToDoList({
    tasks,
    editText,
    edittingTaskId,
    setEditText,
    setEdittingTaskId,
    handleDeletion,
    isTaskComplete,
    handleEditing
}: ToDoListProps) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {edittingTaskId === task.id ? (
                        <input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                    ) : (
                        <span className={task.isCompleted ? "line-through" : ""}>
                            {task.text}
                        </span>
                    )}

                    <button onClick={() => handleDeletion(task.id)}>
                        Delete
                    </button>

                    <button onClick={() => isTaskComplete(task.id)}>
                        {task.isCompleted ? "Undo" : "Complete"}
                    </button>

                    <button
                        onClick={() => {
                            if (edittingTaskId === task.id) {
                                handleEditing(task.id, editText);
                                setEdittingTaskId(null);
                            } else {
                                setEdittingTaskId(task.id);
                                setEditText(task.text);
                            }
                        }}
                    >
                        {edittingTaskId === task.id ? "Save" : "Edit"}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;