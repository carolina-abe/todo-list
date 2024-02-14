import React from "react"
import { Task } from "../Task"

type TaskListProps = {
  tasks: {
    id: number
    name: string 
  } []
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} {...task}/>
      ))}
    </ul>
  )
}
