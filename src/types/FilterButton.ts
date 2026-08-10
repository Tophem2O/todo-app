import type { FilterStatus } from "./FilterStatus"

export type FilterButtonProps = {
    setFilter: React.Dispatch<React.SetStateAction<FilterStatus>>
}