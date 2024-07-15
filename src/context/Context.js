
import React,{createContext, useState} from 'react'
export const Data=createContext()


export default function Context({children}) {

  const[email,setEmail]=useState("")
  const[individualPostId,setIndividualPostId]=useState()

  return (
    <Data.Provider value={{email,setEmail,individualPostId,setIndividualPostId}}>
       {children}

    </Data.Provider>
  )
}
