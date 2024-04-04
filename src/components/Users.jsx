import {useEffect, useState, useCallback} from "react"
//hooks
import useFetchUS from "../hooks/useFetchUS"
//tags endpoints
import USERS_ENDPOINTS from "../endpoints/users_endpoint"



function cbUserList({id, email}){
    return <li key={id}>{email}</li>
}


export default function Users(){
    let {data, error} = useFetchUS(USERS_ENDPOINTS.GET_ALL)


    return (
        <>
          <h1>users</h1>
          <ol>
            {data && data.map(cbUserList)}
        </ol>
        </>
    )
}

