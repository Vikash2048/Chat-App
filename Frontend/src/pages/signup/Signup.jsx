import React, { useState } from 'react'
import GenderChoose from './GenderChoose'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender })
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto text-center '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
          <span className='text-blue-500'> ChatApp </span>
        </h1>

        {/* form  */}

        <form onSubmit={handleSubmit}>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' value={inputs.fullname} onChange={(e) => (setInputs({ ...inputs, fullname: e.target.value }))} />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e) => (setInputs({ ...inputs, username: e.target.value }))} />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text  text-white'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' value={inputs.password} onChange={(e) => (setInputs({ ...inputs, password: e.target.value }))} />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text  text-white'>Confirm Password</span>
            </label>
            <input type="text" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' value={inputs.confirmPassword} onChange={(e) => (setInputs({ ...inputs, confirmPassword: e.target.value }))} />
          </div>

          <GenderChoose onCheckboxChange={handleCheckBox} selectedGender={inputs.gender} />

          <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-400'>
            Already have an account?
          </Link >

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup