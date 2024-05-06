import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation,lastIndex}) => {

    const {selectedConversation, setSelectedConversation} = useConversation();

    const userSelected = selectedConversation?._id === conversation._id;
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-[7px] cursor-pointer  ${userSelected ? "bg-sky-500" : ""}`} onClick={() =>  setSelectedConversation(conversation)}>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullname}</p>
                {/* <span className='text-xl'>😊</span> */}
            </div>
        </div>
    </div>

    {/* divider  */}
    {!lastIndex && (<div className='border-b border-slate-700 '></div>)}
    </>
  )
}

export default Conversation