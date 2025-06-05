import React from 'react'

export const TaskItem = ({task, deleteTask, toggleCheck}) => {
  return (
    <li className='flex flex-col m-6 space-y-4'>
      <div className='flex items-center space-x-45'>
        <input type="checkbox" checked={task.checked} onChange={()=> toggleCheck(task.taskName)} />
        <p className={task.checked? 'isChecked' : ''}>{task.taskName}</p>
        <button className='text-white cursor-pointer' onClick={() => deleteTask(task.taskName)}>X</button>
      </div>
    </li>
  )
}
