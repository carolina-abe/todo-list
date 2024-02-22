import { useEffect, useState } from 'react'
import { TaskInput } from './components/TaskInput'
import { Task } from './components/Task'
import { TaskProps } from './types/tasks'

function App() { 

  const storedTasks = localStorage.getItem('tasks');
  // verify if is != null or undefined before call JSON.parse
  // JSON.parse turns string in an array of objects
  const initialTasks: TaskProps[] = storedTasks ? JSON.parse(storedTasks) : [];

  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks)

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
    // verify if the id in each task is different of argument taskId passed 
    // if this is true the task is keep, if false it will be removed
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskDone = (taskId: number) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task))
  }
  
  useEffect(() => {
    // turns array in string
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <>
      <h1 className='text-2xl mx-2 my-4'>TodoList</h1>
      <TaskInput onAddTask={addTask}/>
      {tasks.length === 0 && (<p>There is no tasks</p>)}
      {tasks.map((task) => (
        <Task 
          id={task.id}
          key={task.id} 
          task={task.task} 
          onDelete={() => removeTask(task.id)} 
          onToggleComplete={() => toggleTaskDone(task.id)}
          />
      ))}
    </>
  )
}

export default App
