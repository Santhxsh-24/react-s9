import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
   const [username,setUserName]=useState('');
   const [password,setPassword]=useState('');
      const {login}= useContext(AuthContext);
      const navigate = useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();
        if(login(username,password)){
            navigate('/dashboard');
        }else{
            alert('Invalid username or password');
        }
    }
    return(
        <div>
            <h3>login page</h3>
           <form> 
            <input type="text" name="username" onChange={(e)=>setUserName(e.target.value)}
           style={{margin:'10px',padding:'7px'}}required/>
           <label>Enter Pasword</label>
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}
            style={{margin: '10px',padding: '7px'}}required/>
            <button type="submit" style={{margin:'10px',padding:'7px'}}>login</button>
            </form>
        </div>

    )
}
export default Login;