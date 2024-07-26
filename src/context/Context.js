
import React,{createContext, useState} from 'react'
export const Data=createContext()


export default function Context({children}) {

  const[email,setEmail]=useState("")
  const[individualPostId,setIndividualPostId]=useState()
  const [arr, setArr] = useState([]);
  const[userId,setUserId]=useState("")
  const[sharedPostData,setSharedPostData]=useState(null)
  const[logedUserEmail,setLogedUserEmail]=useState(null)

  return (
    <Data.Provider value={{email,setEmail,individualPostId,setIndividualPostId,arr, setArr,userId,setUserId,sharedPostData,setSharedPostData,logedUserEmail,setLogedUserEmail}}>
       {children}

    </Data.Provider>
  )
}
