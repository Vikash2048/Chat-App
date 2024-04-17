import {useState} from 'react'
import axios from "axios"
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
     const [loading,setLoading] = useState(false);
     const {setAuthUser} = useAuthContext();

     const login = async(username,password) => {

        const success = handleInput(username,password);
        if(!success) return;

        setLoading(true);

        try{
            const res = await axios.post("/api/auth/login",{
                username,password
            });
            const loginData = res.data;
            if(res.error){
                throw new Error(res.error);
            }
            console.log(res);

            localStorage.setItem("logged-user",JSON.stringify(loginData));
            setAuthUser(loginData);

        } catch(error){
            if(error.response){
                toast.error(error.response.data.error);
            } else if(error.request){
                toast.error("Server is not responding. Pls try later")
                
            } else {
                toast.error(error.message);
            }
        } finally{
            setLoading(false);
        }
     }

     return {loading, login};
}

export default useLogin;


function handleInput(username,password){
    if(!username || !password){
        toast.error("Fill all Fields");
        return false;
    } 

    return true;
}