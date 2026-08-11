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
        <ul className="space-y-4">
            {tasks.map((task) => (
                <li key={task.id} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/40 rounded-2xl transition-all duration-300">
                    <div className="flex-1 flex items-center min-w-0">
                        {edittingTaskId === task.id ? (
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="flex-1 bg-slate-950/80 border border-indigo-500/50 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                                autoFocus
                            />
                        ) : (
                            <span className={`truncate text-lg transition-all duration-300 ${task.isCompleted ? "line-through text-slate-500" : "text-slate-200"}`}>
                                {task.text}
                            </span>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-2 sm:opacity-70 sm:group-hover:opacity-100 transition-opacity shrink-0">
                        <button 
                            onClick={() => isTaskComplete(task.id)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${task.isCompleted ? "bg-slate-700/50 text-slate-400 hover:bg-slate-600/50" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)]"}`}
                        >
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
                            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 hover:shadow-[0_0_10px_rgba(99,102,241,0.2)] transition-all duration-200"
                        >
                            {edittingTaskId === task.id ? "Save" : "Edit"}
                        </button>
                        
                        <button 
                            onClick={() => handleDeletion(task.id)}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 hover:shadow-[0_0_10px_rgba(244,63,94,0.2)] transition-all duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;