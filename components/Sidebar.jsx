"use client"
import { FiHome, FiBox, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { FaBuffer } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { ImCross } from "react-icons/im";
import { LiaSignOutAltSolid } from "react-icons/lia";
const Sidebar = () => {

  return (
  
<div className="sidebar">
   <span style={{direction:"rtl"}}><ImCross /> </span>
   <Link href="/dashboard" className="link">
        <FiHome />
        <span>Dashboard</span>
      </Link>
      <Link href="/products" className="link">
        <FiBox />
        <span>Products</span>
      </Link>
      <Link href="/orders" className="link">
        <FiShoppingCart />
        <span>Orders</span>
      </Link>
      <Link href="/category" className="link">
        <FaBuffer />
        <span>Categories</span>
      </Link>
      <Link href="/brand" className="link">
      <FaCrown />
        <span>Brands</span>
      </Link>
      <Link href="/users/profile" className="link">
      <CgProfile />
        <span>Profile</span>
      </Link>
      <Link href="/users" className="link">
      <FaUsers />
        <span>Users</span>
      </Link>
      <Link href="#" onClick={()=>{signOut()}} className="link">
      <LiaSignOutAltSolid />
        <span>LogOut</span>
      </Link>
</div>

  )




   

  
 
}
 
export default Sidebar;