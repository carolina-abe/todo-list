import { Plus } from "@phosphor-icons/react"
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
        className="rounded border mx-2 my-4 p-[0.25rem] border-slate-500"
      />
      <button 
        type="submit" className="rounded bg-slate-700 hover:bg-slate-500 p-2 text-white font-bold text-sm"
      >
        <Plus size={14} weight="bold"/>
      </button>
    </form>
  )
}
