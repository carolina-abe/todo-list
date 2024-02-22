import React from "react"
import { TaskProps } from "../../types/tasks"

type Props = Partial<TaskProps> & {
  onDelete: (id: number) => void
  onToggleComplete: (id: number) => void
}

export const Task: React.FC<Props> = ({ task, onDelete, onToggleComplete }) => {
  // verify isCompleted
  return (
    <li className="list-none border-2 rounded m-2 p-2 flex justify-between items-center border-slate-400">
      <span onClick={onToggleComplete} className="font-semibold">{task}</span>
      <button className="rounded bg-red-500 hover:bg-red-400 text-white px-3 py-1 ml-auto" onClick={onDelete}>Remove</button>
    </li>
  )
}
