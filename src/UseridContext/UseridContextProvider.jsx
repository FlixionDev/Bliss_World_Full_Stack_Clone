import { createContext, useState } from "react";
// require('dotenv').config();
// const DB_API=process.env.DB_API;
let DB_API="https://noiseless-soapy-zucchini.glitch.me"


export const useridContext=createContext()

export default function UseridContextProvider({children}){
    const [userIdState,setUserIdState]=useState()
    console.log("userId by contextApi-->",userIdState)
    fetch(`${DB_API}/user`,{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "auth":localStorage.getItem("userToken")
        }
    })
    .then((res)=>{
        res.json().then((res)=>{
            setUserIdState(res.userId)
        })
    })
    .catch((err)=>{
        console.log("err after userpost",err)
    })
    
    return(
        <useridContext.Provider value={{userIdState,DB_API}}>
         {children}
        </useridContext.Provider>
    )
}