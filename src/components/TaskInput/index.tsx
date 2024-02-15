import React, { FormEvent, useState } from "react"

type TaskInputProps = {
  onAddTask: (input: string) => void
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [input, setInput] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(input.trim()) {
      onAddTask(input)
      setInput('')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  )
}
