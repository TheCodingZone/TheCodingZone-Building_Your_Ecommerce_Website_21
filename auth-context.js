import React, { createContext, useState } from "react";

const AuthContext=React.createContext({
token:'',
isLoggedIn:false,
login:(token)=>{

},
logout:()=>{}
})

export const AuthContextProvider=(props)=>{
   const initialToken=localStorage.getItem('token');
    const[token,setToken]=useState(initialToken);
   
    
    const userIsLoggedIn=!!token;
    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token);

        setTimeout(() => {
         setToken(null);
         localStorage.removeItem('token');
        
        }, 300000);
     }
     const logoutHandler=()=>{
      setToken(null);
      localStorage.removeItem('token');
     }
     const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
     }
return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;