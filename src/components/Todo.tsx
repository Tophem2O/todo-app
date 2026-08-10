import { useState } from "react";
import React from "react";

type taskProperties = {
    id: number;
    text: string;
    isCompleted: boolean;
}

function Todo() {

    const [task, setTask] = useState<taskProperties[]>([])
    const [input, setInput] = useState("")
    const [editText, setEditText] = useState("")
    const [edittingTaskId, setEdittingTaskId] = useState<number | null>(null)
    const [filterStatus, setFilter] = useState<"All" | "Completed" | "Pending">("All")

    const handleInput = () => {
        if (input === "") {
            return
        }

        setTask([...task, {
            id: Date.now(),
            text: input,
            isCompleted: false
        }]);

        setInput("");
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleInput()
        }
    }

    const handleDeletion = (idToDelete: number) => (
        setTask(task.filter(task => (task.id) !== (idToDelete)))
    )

    const isTaskComplete = (taskId: number) => (
        setTask(task.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }

            }
            return task;

        }))
    )

    const handleEditing = (taskId: number, newText: string) => (
        setTask(task.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    text: newText
                }
            }
            return task;
        }))
    )

    const handleFilterStatus = (filterStatus: "All" | "Completed" | "Pending") => {
        if (filterStatus === "Completed") {
            return (
                task.filter(task => (task.isCompleted) === true)
            )
        } else if (filterStatus === "Pending") {
            return (
                task.filter(task => (task.isCompleted) === false)
            )
        } else {
            return task
        }
    }

    const mainRender = (filterStatus: "All" | "Completed" | "Pending") => {

        const filteredTasks = handleFilterStatus(filterStatus)

        return (
            <>
                <ul>
                    {
                        filteredTasks.map((task) => (
                            <li
                                key={task.id}
                            >
                                {
                                    edittingTaskId === task.id ? (
                                        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                                    ) : (
                                        <span className={task.isCompleted ? "line-through" : ""}>{task.text}</span>
                                    )
                                }
                                <button onClick={() => handleDeletion(task.id)}>Delete</button>
                                <button onClick={() => isTaskComplete(task.id)}>{task.isCompleted ? "Undo" : "Complete"}</button>
                                <button onClick={() => {
                                    if (edittingTaskId === task.id) {
                                        handleEditing(task.id, editText);
                                        setEdittingTaskId(null);
                                    } else {
                                        setEdittingTaskId(task.id);
                                        setEditText(task.text);
                                    }
                                }} >{edittingTaskId === task.id ? "Save" : "Edit"}</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Tasks to do."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className=""
            />
            <button onClick={handleInput}>Add task</button>

            <div>
                <button onClick={() => setFilter("All")}>All</button>
                <button onClick={() => setFilter("Completed")}>Completed</button>
                <button onClick={() => setFilter("Pending")}>Pending</button>
            </div>
            <main>{mainRender(filterStatus)}</main>
        </div >
    )
}

export default Todo;

