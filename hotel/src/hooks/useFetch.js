import axios from "axios";
import { useEffect, useState } from "react";
//,"proxy": "http://localhost:4004/api/"

const UseFetch = (url) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        setLoading(true);
        const fetchData = async()=>{
            try{
                const res = await axios.get(url);
                setLoading(false);
                // console.log(res.data)
                setData(res.data);
            }catch(err){
                setError(err);
                console.log(err)
            }
        }
        fetchData();
    },[url]);


    const refetch = async()=>{
        setLoading(true)
        try{
            const res = await axios.get(url)
            setData(res.data);
            setLoading(false);
        }catch(err){
            setError(err);
        }
    };
    
    return {data, loading,error, refetch};


}

export default  UseFetch ;
