import React, {useState} from 'react'
import TaskInput from '../components/TaskInput'
import { TaskItem } from '../components/TaskItem'

function TodoPage() {
    const [toDoList, setToDoList] = useState([])

    const addTask = (taskName)=> {
    const newTask = {taskName, checked: false}
    setToDoList([...toDoList, newTask])
  }

function deleteTask(deleteTaskName) {
  setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName))
}

function toggleCheck(taskName) {
  setToDoList((prevToDoList) => prevToDoList.map(task => task.taskName === taskName ? {...task,checked: !task.checked}: task,),
)
}

  return (
    <div className='bg-gray-500 flex flex-col justify-center items-center w-lg h-100 mt-60 mx-auto rounded-md'>
      <h1 className='flex self-start text-white text-4xl font-bold pb-10 ml-6'>My Todo</h1>

      <TaskInput addTask={addTask} />

      <div>
      <ul>
        {toDoList.map((task, key) => (
          <TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck} />
        ))}
      </ul>
      </div>
    </div>
  )
}

export default TodoPage