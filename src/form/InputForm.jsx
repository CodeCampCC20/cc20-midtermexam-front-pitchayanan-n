import React from 'react'

function InputForm({
  error,
  onChange,
  value,
  placeholder,
  type="text",
  id
}) {

  return (
    <div>
      <input className={`w-full px-4 py-2 rounded-md ${error ? "outline-1 outline-red-500" : "outline-0"}`}
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      />
      <p className='text-xs text-red-500'>{error}</p>
    </div>
  )
}

export default InputForm