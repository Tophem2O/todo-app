import { useState } from "react";
import React from "react";

type taskProperties = {
    id: number;
    text: string;
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
            text: input
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
                        <li key={task.id}>{task.text} <button onClick={() => handleTaskDeletion(task.id)}>Delete</button></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;