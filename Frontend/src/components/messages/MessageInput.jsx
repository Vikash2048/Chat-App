import React, { useState } from 'react'
import { BsSend } from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message,setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!message) return;

    await sendMessage(message);

    setMessage("")
  }
  return (
    <form className='px-4 my-3 relative' onSubmit={handleSubmit}>
        <div className='w-full'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'  placeholder='send a message' value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button type='submit' className='absolute inset-y-1 end-5 flex items-center pe-3 text-white'>
            {loading ? <div className='loading loading-spinner'></div> : <BsSend/>}
        </button>
    </form>
  )
}

export default MessageInput