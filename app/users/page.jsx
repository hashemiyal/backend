import UserList from "@/components/UserList";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const User = async() => {
   let session=await getServerSession(authOptions)
   if(!session?.user.isAdmin){redirect('/')}
   let res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
   let users=await res.json();

    return ( 
       <UserList users={users}/>
     );
}
 
export default User;