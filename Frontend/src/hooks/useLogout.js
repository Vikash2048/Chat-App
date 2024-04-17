import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import {toast} from "react-hot-toast"
import axios from "axios"


const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        setLoading(true);

        try {
            const res = await axios.post("/api/auth/logout");

            const logoutData = res.data;
            if (res.error) {
                throw new Error(res.error);
            }
            // console.log("logoutData :", logoutData);

            localStorage.removeItem("logged-user");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout };
}

export default useLogout