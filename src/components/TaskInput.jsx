import React from 'react'
import { useState } from 'react'

const TaskInput = ({addTask})=> {
  const [task, setTask] = useState('')
  
  function handleInputValue(e) {
    setTask(e.target.value)
  }

  function handleAddTask(e) {
    e.preventDefault()
    if(task.trim() === '') return
    addTask(task)
    setTask('')
  }

  return (
    <div className='w-full'>
      <form className='flex flex-row justify-around' onSubmit={handleAddTask}>
        <input 
        className='text-white border-b-1 border-gray-500 w-90 mr-4' 
        value={task}
        type="text" 
        placeholder='new task' 
        onChange={handleInputValue}/>
        <button className='text-white cursor-pointer p-2 rounded-sm bg-gray-400'>Add</button>
      </form>
    </div>
  )
}

export default TaskInput