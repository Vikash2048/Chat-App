import React from 'react'
import GenderChoose from './GenderChoose'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto text-center '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
          <span className='text-blue-500'> ChatApp </span>
        </h1>

        {/* form  */}

        <form action="">

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text  text-white'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text  text-white'>Confirm Password</span>
            </label>
            <input type="text" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
          </div>

          <GenderChoose/>

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-400'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up

            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup