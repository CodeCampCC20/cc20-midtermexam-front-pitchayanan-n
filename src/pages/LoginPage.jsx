import React, {useState} from 'react'
import  LoginValidator  from '../validator/LoginValidator'
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import InputForm from '../form/InputForm';
import loginApi from '../api/LoginApi';

const initialInput = {
  username: "",
  password: ""
};

function LoginPage() {

  const [input, setInput] = useState(initialInput)
  const [inputError, setInputError] = useState(initialInput)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({...prev, [id]: value}))
    setInputError((prev) => ({...prev, [id]: ""}))
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true)
      LoginValidator.validateSync(input, {abortEarly:false})

      const res = await loginApi.login(input)
      setInput(initialInput)
      console.log("res.data", res.data)

      setInput(initialInput)
      navigate('/')
    } catch (error) {
      console.log(error)

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setInputError(err);
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='bg-gray-700 flex flex-col justify-center items-center w-lg h-100 mt-60 mx-auto rounded-md'>
      <p className='flex self-start text-4xl text-white font-bold pb-10 ml-8'>Welcome</p>
      <form className='space-y-4 w-md' onSubmit={handleSubmit}>
        <InputForm 
          type="text" 
          id='username' 
          placeholder='username' 
          value={input.username} 
          error={inputError.username}
          onChange={handleChange}
        />

        <InputForm
          type="password" 
          id='password' 
          placeholder='password' 
          value={input.password} 
          error={inputError.password}
          onChange={handleChange}
        />

        <button className='text-white text-lg font-bold rounded-sm p-3 bg-gray-500 w-full' type='submit'>LOG IN</button>
      </form>
    </div>
  )
}

export default LoginPage