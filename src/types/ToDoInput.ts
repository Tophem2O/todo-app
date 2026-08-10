export type ToDoInputProps = {
    input: string
    setInput: React.Dispatch<React.SetStateAction<string>>
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
    handleInput: () => void
}