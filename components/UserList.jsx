"use client"
import swal from "sweetalert";
import { RiDeleteBinFill } from "react-icons/ri";
import { redirect } from "next/navigation";
import Link from "next/link";
const UserList = ({users}) => {
   async function handlechange(value,id){
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,{method:"PUT",body:JSON.stringify({role:value}),headers:{"Content-Type":"application/json"}}).then(res=>res.json()).then(data=>{console.log(data)});
  }
    return ( 
        <>
       
        <h1>List of All Available Users</h1>
        <hr />
        <Link href="/users/new">
          <button>Add New User</button>
        </Link>
  
        <table className="has-text-centered">
        <thead>
          <tr>
          <th>Number</th>
            <th>User Name</th>
            <th>E-mail</th>
          
        
            <th>Status</th>
        
            <th>Actions </th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((user,index)=>(
              <tr key={user._id}>
                 <th>{index+1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
             
              
                <td>
                <select defaultValue={user.isAdmin} onChange={(e)=>{handlechange(e.target.value,user._id)}}>
              
                  <option value={false}>Guest</option>
                  <option value={true}>Admin</option>
                </select>

                </td>
               
                <td className="">
                  <button className="button is-danger column is-12 has-text-centered" onClick={()=>{

swal({
  title: "Are you sure?",
  text: "You want to Delete this User!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(res=>res.json()).then(data=>{console.log(data);redirect('/users')});
   
  } else {
    swal("Your User is safe!");
  }
});
                  }}> <RiDeleteBinFill /></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </> 
     );
}
 
export default UserList;