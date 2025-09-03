import React, { useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios';


export const userDataContext = React.createContext();
const UserContext = ({children}) => {
    let [userData,setUserData]=useState("");
    
    let {serverURL} = useContext(authDataContext);
    const getCurrentUser=async()=>{
      try {
        let result = await axios.get(`${serverURL}/api/user/getcurrentuser`, { withCredentials: true});
        setUserData(result.data);
        console.log(result.data,"CURRENT_USER");
      } catch (error) {
        console.log("getCurrentUser error", error);
        setUserData(null);
      }
    }
    useEffect(()=>{
      getCurrentUser();
    },[])
    let value={
      userData,setUserData,getCurrentUser
    }
  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  )
}

export default UserContext