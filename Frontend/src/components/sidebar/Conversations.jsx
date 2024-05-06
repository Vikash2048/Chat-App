import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

const Conversations = () => {
  const {loading, conversation} = useGetConversation();
  const conversationlength = conversation.length;
  return (
    <div className=' pb-4 flex flex-col overflow-auto'>
      {
        conversation.map((conversation,id) =>(
          <Conversation 
          key={conversation._id}
          conversation={conversation}
          id={id}
          lastIndex={id == conversationlength - 1}
          />
        ))
      }

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations