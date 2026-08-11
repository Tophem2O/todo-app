import type { ToDoInputProps } from "../types/ToDoInput";
function ToDoInput(props: ToDoInputProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <input
                type="text"
                placeholder="Tasks to do."
                value={props.input}
                onChange={(e) => props.setInput(e.target.value)}
                onKeyDown={props.handleKeyDown}
                className="flex-1 bg-slate-950/60 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner"
            />
            <button
                onClick={props.handleInput}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all active:scale-95 border border-indigo-500/50 whitespace-nowrap"
            >
                Add task
            </button>
        </div>
    )
}

export default ToDoInput;