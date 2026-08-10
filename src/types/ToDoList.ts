import type { TaskProperties } from "./taskProperties";

export type ToDoListProps = {
    tasks: TaskProperties[];
    editText: string;
    edittingTaskId: number | null;
    setEditText: React.Dispatch<React.SetStateAction<string>>;
    setEdittingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
    handleDeletion: (idToDelete: number) => void;
    isTaskComplete: (taskId: number) => void;
    handleEditing: (taskId: number, newText: string) => void;
};