import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);

            try{
                const res = await axios.get("/api/users");
                const data = res.data;

                if(res.error){
                    throw new Error(res.error);
                }

                setConversation(data);
            } catch(error){
                toast.error(error.message);
            } finally{
                setLoading(false);
            }

        }

        getConversations();
    },[]);

    return {loading, conversation};
}

export default useGetConversation