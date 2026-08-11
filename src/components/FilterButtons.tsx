import type { FilterButtonProps } from "../types/FilterButton"

export function FilterButtons(props: FilterButtonProps) {
    const btnClass = "px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-slate-700/50 bg-slate-800/40 hover:bg-slate-700/60 hover:border-slate-500/50 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] active:scale-95 text-slate-300";
    return (
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button className={btnClass} onClick={() => props.setFilter("All")}>All</button>
            <button className={btnClass} onClick={() => props.setFilter("Completed")}>Completed</button>
            <button className={btnClass} onClick={() => props.setFilter("Pending")}>Pending</button>
        </div>
    )
}