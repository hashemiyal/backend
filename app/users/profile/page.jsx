import ProfileComponent from "@/components/ProfileComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const Profile = async() => {
    let session = await getServerSession(authOptions);
    if(!session?.user?.isAdmin){ redirect('/')}
    return ( 
       <ProfileComponent session={session}/>
     );
}
 
export default Profile;