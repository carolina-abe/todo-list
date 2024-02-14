import { useState } from 'react'
import { TaskInput } from './components/TaskInput'
import { Task, TaskProps } from './components/Task'

type TaskListProps = {
  tasks: TaskProps[],
  done: boolean
}

function App({ tasks }: TaskListProps) {
  const [taskList, setTaskList] = useState([])

  const addTask = () => {
    setTaskList([...taskList])
  }

  return (
    <>
      <h1 className='underline'>TodoList</h1>
      <TaskInput onAddTask={addTask}/>
      {tasks.map(task => (
        <Task key={task.id} {...task}/>
      ))}
    </>
  )
}

export default App
