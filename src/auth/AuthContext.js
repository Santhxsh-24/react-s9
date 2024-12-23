import {createContext, useState} from "react";

const AuthContext = createContext();

export const Authprovider =({children}) => {
    const [isAuthenticated,SetIsAuthenticated] =useState(false);
    const login =(username,password)=> {
        if(username && password) {
            SetIsAuthenticated(true);
            return true;
        }
        return false;
    }
    const logout =() =>{
        SetIsAuthenticated(false);
    }
      return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
      )
}
export default AuthContext;