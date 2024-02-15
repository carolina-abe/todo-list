import React from "react"
import { TaskProps } from "../../types/tasks"

type Props = Partial<TaskProps> & {
  onDelete: () => void
}

export const Task: React.FC<Props> = ({ task, onDelete }) => {
  return (
    <li>
      <span>{task}</span>
      <button onClick={() => onDelete}>Remove</button>
    </li>
  )
}
