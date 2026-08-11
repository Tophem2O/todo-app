import React from "react";
import { useState } from "react";
import type { TaskProperties } from "./types/TaskProperties";
import type { FilterStatus } from "./types/FilterStatus";
import ToDoInput from "./components/ToDoInput";
import { FilterButtons } from "./components/FilterButtons";
import ToDoList from "./components/ToDoList";

function Todo() {

    const [task, setTask] = useState<TaskProperties[]>([])
    const [input, setInput] = useState("")
    const [editText, setEditText] = useState("")
    const [edittingTaskId, setEdittingTaskId] = useState<number | null>(null)
    const [filterStatus, setFilter] = useState<FilterStatus>("All")

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

    const handleFilterStatus = (filterStatus: FilterStatus) => {
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

    const FILTERED_TASKS = handleFilterStatus(filterStatus)

    return (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/40 rounded-3xl shadow-2xl shadow-black/80 p-6 sm:p-8 md:p-10">
            <div className="mb-8">
                <ToDoInput
                    input={input}
                    setInput={setInput}
                    handleKeyDown={handleKeyDown}
                    handleInput={handleInput} />
            </div>
            <div className="space-y-6">
                <FilterButtons
                    setFilter={setFilter}
                />
                <ToDoList
                    tasks={FILTERED_TASKS}
                    editText={editText}
                    edittingTaskId={edittingTaskId}
                    setEditText={setEditText}
                    setEdittingTaskId={setEdittingTaskId}
                    handleDeletion={handleDeletion}
                    isTaskComplete={isTaskComplete}
                    handleEditing={handleEditing}
                />
            </div>
        </div>
    )
}

export default Todo;

