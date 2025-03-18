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
                    swal("Welcom to The Dashboard !");
                    redirect('/dashboard')
        };
        
        return (
          <div className="container is-fluid mt-5">
           
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title has-text-centered">Login</h1>
                <form onSubmit={handleSubmit} className="column is-full" >
                  <div className="field">
                    <label className="label" htmlFor="email">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="password">Password</label>
                    <div className="control">
                      <input
                        className="input"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button type="submit" className="button is-primary is-fullwidth">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default LoginFormComponent;