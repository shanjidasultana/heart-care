import React, { useEffect,  useState } from 'react';
import { createContext } from "react";

export const MyContext= createContext();

const Context = ({children}) => {
    const [doctors,setDoctors] =useState([]);
    useEffect(()=>{
        fetch("./doctors.json")
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[]);
    return (
        <MyContext.Provider value={doctors}>
            {children}
        </MyContext.Provider>
    );
};

export default Context;
