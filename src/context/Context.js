
import React,{createContext, useState} from 'react'
export const Data=createContext()


export default function Context({children}) {

  const[email,setEmail]=useState("")
  const[individualPostId,setIndividualPostId]=useState()
  const [arr, setArr] = useState([]);
  const[userId,setUserId]=useState("")

  return (
    <Data.Provider value={{email,setEmail,individualPostId,setIndividualPostId,arr, setArr,userId,setUserId}}>
       {children}

    </Data.Provider>
  )
}
