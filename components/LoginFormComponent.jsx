"use client"
import { useState } from "react";
import {signIn} from "next-auth/react";
import swal from "sweetalert";
import { redirect } from "next/navigation";
const LoginFormComponent = () => {
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        
        const handleSubmit =  async (e) => {
          e.preventDefault();
          if(!email || !password){
            swal("Please Enter Your Email and Password!");
            return;
          }
         
                let res=await signIn("credentials",{
                    email,password,
                    redirect:false
                   });
                  if(res.error){swal("Sorry Invalide Email or Password !");
                    return;
                  }
                    swal("Welcome to The Dashboard !");
                    redirect('/dashboard')
        };
        
        return (
         <>
           <div className="columns">
  <div className="column main-content">
      <div className="form-container">
        
          <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="field">
                  <label className="label" htmlFor="email">Email</label>
                  <div className="control">
                      <input className="input" type="email" id="email" name="email" placeholder="Enter your Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>
              </div>

              <div className="field">
                  <label className="label" htmlFor="password">Password</label>
                  <div className="control">
                      <input className="input" type="password" id="password" name="password" placeholder="Enter your password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                  </div>
              </div>

              <div className="field">
                  <div className="control">
                      <button className="button is-info is-fullwidth" type="submit">Login</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
</div>

         </>
        
     );
}
 
export default LoginFormComponent;