import React from "react"
import { Task } from "../Task"
import { TaskProps } from "../../types/tasks"

type TaskListProps = {
  tasks: TaskProps[]
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
