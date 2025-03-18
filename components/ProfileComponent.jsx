"use client"
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
const ProfileComponent = ({session}) => {
   let [username,setusername]=useState(session?.user.username);
   let[password,setPassword]=useState("");
   let[error,seterror]=useState("");
   function handlesubmit(e){
        e.preventDefault();
        if(password.length<=0){
          seterror("Password is required!");
        }
        else if(password.length<6){
         
          seterror("password must be at least 6 characters !");
          return;
        }
        else{
          seterror("");
          redirect("/users/profile/confirm");
        }

       
   }
    return ( 
        <> 
          <h1>EDITE YOUR PROFILE Mr :<strong>{session?.user.username}</strong></h1>
          <hr/>
        <form onSubmit={handlesubmit}>
            <input type="text" name="username" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}} required/>
            <input placeholder="email" disabled value={session?.user.email}/>
            <input type="password" name="newpassword" placeholder="New password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <span style={{color:"red",fontSize:"10px"}}>{error}</span>
            <hr />
            <button type="sumbit">Save new info</button>
            <Link href={'/dashboard'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
        </form>
        </>
     );
}
 
export default ProfileComponent;