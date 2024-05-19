import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation"
import useGetConversation from  "../../hooks/useGetConversation"
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversation} = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error("search term must be at least 3 char long")
    }

    const foundConversation = conversation.find((c) => 
      c.fullname && c.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if(foundConversation) {
      setSelectedConversation(foundConversation);
      setSearch("");

    } else {
      toast.error("No Such User Found!");
    }
  }
  return (
   <form onSubmit={handleSubmit} className='flex items-center gap-2'>
    <input type="text" placeholder='Search...' className='input input-bordered rounded-full' value={search} 
    onChange={(e) => setSearch(e.target.value)} />
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'><IoSearch/></button>
   </form>
  )
}

export default SearchInput