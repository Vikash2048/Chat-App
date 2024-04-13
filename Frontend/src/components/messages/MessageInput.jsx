import React from 'react'
import { BsSend } from "react-icons/bs"

const MessageInput = () => {
  return (
    <form className='px-4 my-3 relative'>
        <div className='w-full'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'  placeholder='send a message' />
        </div>
        <button type='submit' className='absolute inset-y-1 end-5 flex items-center pe-3 text-white'>
            <BsSend/>
        </button>
    </form>
  )
}

export default MessageInput