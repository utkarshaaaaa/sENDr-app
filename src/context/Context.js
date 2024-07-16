
import React,{createContext, useState} from 'react'
export const Data=createContext()


export default function Context({children}) {

  const[email,setEmail]=useState("")
  const[individualPostId,setIndividualPostId]=useState()
  const [arr, setArr] = useState([]);

  return (
    <Data.Provider value={{email,setEmail,individualPostId,setIndividualPostId,arr, setArr}}>
       {children}

    </Data.Provider>
  )
}
