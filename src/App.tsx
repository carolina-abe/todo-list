import { useState } from 'react'
import { TaskInput } from './components/TaskInput'
import { Task } from './components/Task'
import { TaskProps } from './types/tasks'

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const addTask = (newTask: string) => {
    // verify if it is not an empty string
    if(newTask.trim()){
      const todo: TaskProps = {
        id: Date.now(),
        task: newTask,
        isCompleted: false
      }
      // updates tasks 
      setTasks(prev => [todo, ...prev]) // todo is the new task 
    }
  }

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <>
      <h1 className='underline'>TodoList</h1>
      <TaskInput onAddTask={addTask}/>
      {tasks.map((task) => (
        <Task key={task.id} task={task.task} onDelete={() => removeTask(task.id)}/>
      ))}
    </>
  )
}

export default App
