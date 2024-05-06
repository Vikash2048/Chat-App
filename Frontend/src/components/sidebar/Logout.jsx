import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';
import { useAuthContext } from '../../context/AuthContext';


const Logout = () => {
    const {logout} = useLogout();
    const {authUser} = useAuthContext();

    const handleLogout = () => {
        logout();
    }
    return (
        <div className='flex justify-between items-center text-white '>
            <TbLogout2 className='cursor-pointer' onClick={handleLogout}/>
            <div className='flex gap-4'>
                <img className='w-7 h-7 ' src={authUser.profilepic} alt="" />
            <p >{authUser.fullname}</p>
            </div>
            
        </div>
    )
}

export default Logout