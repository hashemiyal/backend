"use client"
import { useState } from "react";
import Link from "next/link";
const ConfrimPasswordComponent = () => {
    let [error,seterror]=useState("");
    let [currpassword,setcurrpassword]=useState("");
    function handlesubmit(e){   
      e.preventDefault();
      if(currpassword.length<=0){
        seterror("Current Password is required!");
      }

    }
    return ( 
        <> 
          <h1><strong>Pleas Enter Your Current Password !</strong></h1>
          <hr/>
        <form onSubmit={handlesubmit}>
          
            <input type="password" name="currpassword" placeholder="Current Password" onChange={(e)=>{e.target.value}}/>
            <span style={{color:"red",fontSize:"10px"}}>{error}</span>
            <hr />
            <button type="sumbit">Change Password</button>
            <Link href={'/dashboard'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
        </form>
        </>
     );
}
 
export default ConfrimPasswordComponent;