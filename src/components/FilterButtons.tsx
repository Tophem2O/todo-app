import type { FilterButtonProps } from "../types/filterButton"

export function FilterButtons(props: FilterButtonProps) {
    return (
        <>
            <button onClick={() => props.setFilter("All")}>All</button>
            <button onClick={() => props.setFilter("Completed")}>Completed</button>
            <button onClick={() => props.setFilter("Pending")}>Pending</button>
        </>
    )
}