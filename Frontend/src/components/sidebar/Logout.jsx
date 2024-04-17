import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

const Logout = () => {
    const {logout} = useLogout();

    const handleLogout = () => {
        logout();
    }
    return (
        <div className='flex justify-between items-center text-white '>
            <TbLogout2 className='cursor-pointer' onClick={handleLogout}/>
            <p>UserName</p>
        </div>
    )
}

export default Logout