"use client"
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import { ImCross } from "react-icons/im";
const Sidebar1 = () => {
    return (
        <div className="sidebar">
         <span style={{direction:"rtl"}}><ImCross /> </span>
         <Link href="/" className="link">
         <CiLogin />
          <span>Login</span>
        </Link>
        <Link href="/" className="link">
        <SiGnuprivacyguard />
          <span>Register</span>
        </Link>
      
    </div>
    
      )
}
 
export default Sidebar1;