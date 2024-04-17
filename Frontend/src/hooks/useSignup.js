import { useState } from 'react'
import axios from "axios"
import toast from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInput({ fullname, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await axios.post("/api/auth/signup", { fullname, username, password, confirmPassword, gender })

            // console.log(res.data);
            const userData = res.data;

            // store user data locally so that it can be access when page refresh 
            localStorage.setItem("logged-user",JSON.stringify(userData));
            // context api 

            setAuthUser(userData);

        } catch (error) {
            if(error.response){
                // console.log(error.response.data.headers)
                toast.error(error.response.data.error);
            } else if (error.request){
                // console.error(error.request);
                toast.error("Server is not responding. Pls try later")
            } else{
                // console.log(error.message);
                toast.error(error.message);
            }
            
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup };
}

export default useSignup;


function handleInput({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error("Fill all the Fields");

        return false;
    }

    if (password !== confirmPassword) {
        toast.error("password didn't match");
        return false;
    }

    if (password.length < 6) {
        toast.error("password is to short");
        return false;
    }

    return true;
}