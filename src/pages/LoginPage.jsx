import React, {useState} from 'react'
import  yupToFormErrors  from '../utils/yupToFormErrors'
import  LoginValidator  from '../validator/LoginValidator'

function LoginPage() {
  const styles = {
    textError: "text-red-500 font-medium"
  }

  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

       const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await LoginValidator.validate(form, {abortEarly: false})
          alert("ส่งสำเร็จ");
          setErrors({});
        } catch(err) {
          console.log(err)
        }
        // } catch(err) {
        //   const errorObj = yupToFormErrors(err);
        //   setErrors(errorObj);
        // }
      } 

  return (
    <div className='bg-gray-700 flex flex-col justify-center items-center w-lg h-100 mt-60 mx-auto rounded-md'>
      <p className='flex self-start text-4xl text-white font-bold pb-10 ml-8'>Welcome</p>
      <form className='space-y-4 w-md' onSubmit={handleSubmit}>
        <div>
          <input className='text-lg rounded-sm p-3 bg-gray-500 w-full' type="text" name='username' placeholder='username' value={form.username} onChange={handleChange}/>
          <p className={styles.textError}>{errors.username}</p>
        </div>
        <div>
          <input className='text-lg rounded-sm p-3 bg-gray-500 w-full' type="password" name='password' placeholder='password' value={form.password} onChange={handleChange} />
          <p className={styles.textError}>{errors.username}</p>
        </div>
        <button className='text-white text-lg font-bold rounded-sm p-3 bg-gray-500 w-full' type='submit'>LOG IN</button>
      </form>
    </div>
  )
}

export default LoginPage