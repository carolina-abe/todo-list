import React from "react"
import { TaskProps } from "../../types/tasks"
import { Trash } from "@phosphor-icons/react"

type Props = TaskProps & {
  onDelete: (id: number) => void
  onToggleComplete: (id: number) => void
}

export const Task: React.FC<Props> = ({ id, isCompleted, task, onDelete, onToggleComplete }) => {
  // verify isCompleted
  return (
    <div className="border-2 rounded m-2 p-2 flex justify-between items-center border-slate-400 w-[100%] max-w-[520px]">
     <div className="flex flex-row gap-2">
      <input 
        className="border"
        type="checkbox" onChange={() => onToggleComplete(id)} 
        checked={isCompleted}
      />
      <span className={`font-semibold ${isCompleted ? 'line-through' : ''}`}>{task}</span>
     </div>
      <button 
        className="rounded bg-slate-800 hover:bg-slate-600 text-white px-2 py-1 ml-auto" 
        onClick={() => onDelete(id)}
      >
        <Trash size={18} weight="bold"/>
      </button>
    </div>
  )
}
