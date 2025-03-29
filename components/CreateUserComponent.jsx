"use client"
import { set } from "mongoose";
import Link from "next/link";
import { useState } from "react";
import swal from "sweetalert";
const CreateUserComponent = () => {
    let [username,setUsername]=useState('');
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    let [error,setError]=useState('');
    function handleSubmit(e){
     e.preventDefault();
        setError('');
        let user={username:username,email:email,password:password};
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(user)})
        .then(res=>res.json()).then(data=>{console.log(data);swal("User Created !");setUsername('');setEmail('');setPassword('');}).catch(err=>{setError("User Already Exist!")});
    }
    return ( 
       <div>
          <h1>Add New User</h1>
          <hr />
        <form onSubmit={handleSubmit}>
            <input type="username" placeholder="Username" required value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
           
            <input  type="email"  placeholder="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            
            <input  type="text"  placeholder="Password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
             <div style={{color:"black",fontSize:"10px",backgroundColor:"red"}}>{error}</div>
            <button type="button" onClick={()=>{setPassword(Math.random().toString(36).slice(-8));setError("Please Save Your Password!")}}>Generat Password</button>
            <hr />
            <button type="sumbit">Create User</button>
             <Link href={'/dashboard'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
        </form>
    </div>
     
     );
}
 
export default CreateUserComponent;