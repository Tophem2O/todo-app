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

    const handleTaskInput = () => {
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
            handleTaskInput()
        }
    }

    const handleTaskDeletion = (idToDelete: number) => (
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
            <button onClick={handleTaskInput}>Add task</button>

            <ul>
                {
                    task.map((task) => (
                        <li
                            key={task.id}
                        ><span className={task.isCompleted ? "line-through" : ""}>{task.text}</span>
                            <button onClick={() => handleTaskDeletion(task.id)}>Delete</button>
                            <button onClick={() => isTaskComplete(task.id)}>{task.isCompleted ? "Undo" : "Complete"}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;