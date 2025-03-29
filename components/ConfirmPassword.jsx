"use client"
import { useState } from "react";
import Link from "next/link";
import swal from "sweetalert";
import { signOut } from "next-auth/react";
const ConfrimPasswordComponent = ({userid,newpass}) => {
    let [error,seterror]=useState("");
    let [currpassword,setcurrpassword]=useState("");
    function handlesubmit(e){   
      e.preventDefault();
      if(currpassword.length<=0){
        seterror("Password is required!");
        
      }else{
        seterror("");
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userid}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({crpassword:currpassword,newpassword:newpass})
        }).then(res=>{if(res.ok){signOut()};return res.json();}).then(data=>swal(data.message)).catch(error=>{console.log(error)})  
      }

    }
    return ( 
        <> 
          <h1><strong>Please Enter Your Current Password !</strong></h1>
          <hr/>
        <form onSubmit={handlesubmit}>
          
            <input type="password" name="currpassword" placeholder="Current Password" onChange={(e)=>{setcurrpassword(e.target.value)}}/>
            <span style={{color:"red",fontSize:"10px"}}>{error}</span>
            <hr />
            <button type="sumbit">Change Password</button>
            <Link href={'/dashboard'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
        </form>
        </>
     );
}
 
export default ConfrimPasswordComponent;