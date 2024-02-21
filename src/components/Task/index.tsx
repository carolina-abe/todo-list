import React from "react"
import { TaskProps } from "../../types/tasks"

type Props = Partial<TaskProps> & {
  onDelete: (id: number) => void
  onToggleComplete: (id: number) => void
}

export const Task: React.FC<Props> = ({ task, isCompleted, onDelete, onToggleComplete }) => {
  // verify isCompleted
  return (
    <li>
      <span onClick={onToggleComplete} style={{textDecoration: isCompleted ? "line-through" : "none" }}>{task}</span>
      <button onClick={onDelete}>Remove</button>
    </li>
  )
}
