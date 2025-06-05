import React, { useState } from 'react'

function ToDoPage() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = ()=> {
    if(input.trim()) {
      setTodos([...todos, {id: Date.now(), text:input, completed:false}])
      setInput("")
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-[#3f1d69] to-[#3f1d69]'>
      <div className='bg-white shadow-lg rounded-2xl p-16'>
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>My Todo</h1>
        <div className='mb-4 flex'>
          <input 
          className='flex-grow px-3 py-2 border-b-1 focus:outline-none focus:ring-2 focus:ring-blue-500' 
          type="text" 
          placeholder='new task'
          value={input}
          onChange={(e) => setInput(e.target.value)} />
          <button className='bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500' onClick={addToDo}>Add</button>
        </div>

        <ul className='space-y-2'>
          {
            todos.map((todo) => (
              <li key={todo.id} className='flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200'>
                <input type="checkbox" 
                checked={todo.completed} 
                onChange={() => setTodos(
                  todos.map((t) => (
                    t.id === todo.id ? {...t, completed: !t.completed} : t
                  ))
                )} 
                className='mr-2 h-5 w-5 text-blue-500'
                />
                <span className={`flex-grow ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>{todo.text}</span>
                <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))} className='ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600'>X</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default ToDoPage