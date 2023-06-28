import React, { useEffect, useReducer, useState } from "react"

function Store()  {

    const [data, isData] = useState([])

    const fetchData = async () => {
        const respons = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await respons.json()
        isData(data)
    }

    useEffect(() => {
        fetchData()
    },[])

    const initialState = 0;

    const reducer =(state, action) =>{

        if(action.type === "increment")
        return state+1;
        if(action.type === "decrement")
        return state-1;
        else
        return state
    }
        
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
        <p>{state}</p>
        <button type="button" onClick={() => dispatch({type: "increment"})}>increase</button>
        <button type="button" onClick={() => dispatch({type: "decrement"})}>decrease</button>

        </>
    )
}

export default Store