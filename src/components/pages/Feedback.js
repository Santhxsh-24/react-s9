import React, { useState } from 'react'
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

function Feedback(){
   let[message,setMessage]=useState("");
   let[username,setUserName]=useState("");
   let [submittedForm, setSubmittedForm]=useState(null);
       const handleSubmit=(e) =>{
        e.preventDefault();
         setSubmittedForm({username,message});
         setUserName("");
         setMessage("");
       }
        return(
        <div>
            <ResponsiveAppBar/>
        <h4>Feedback form</h4>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Username'value={username}
             onChange={(event) => setUserName(event.target.value)}required/><br/>
             <input type='text' placeholder='type message...'value={message}
             onChange={(event) => setMessage(event.target.value)}required/>
             <button type ='submit' style={{color:'wheat',background:'blue',
                border:'none',borderRadius:'10px',margin:"10px",padding:"10px"}}>Send</button>
        </form>

        {
            submittedForm &&(
            <div>
            <h4>username:{submittedForm.username}</h4>
            <p>Message Received from {submittedForm.username}:{submittedForm.message}</p>
        </div>
        )}
        </div>
        )
}
export default Feedback