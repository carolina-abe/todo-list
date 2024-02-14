import React from "react"

export type TaskProps = {
    id: number,
    name: string
}

export const Task: React.FC<TaskProps> = ({ name }) => {
  return (
    <li>
      <span>{name}</span>
      <button>Remove</button>
    </li>
  )
}
