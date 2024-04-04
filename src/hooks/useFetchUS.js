import { useState, useEffect, useCallback } from "react";
import fetchServerUS from "../instances_fetch/us_fetch";
import * as Sentry from "@sentry/react";


export default function useFetchUS(uri){

    let [data, setData] = useState([]);
    let [error, setError] = useState(false);

    const getFetch = useCallback(async(uri)=>{
        try{
            let res = await fetchServerUS.get(uri)
            setData(res.data)
        }catch (err){
            setError(err)
            Sentry.captureException(error);
        }
    },[]);
        
    useEffect(()=>{
        getFetch(uri)
    },[]);

    return{
        data,
        setData,
        error
    }
}