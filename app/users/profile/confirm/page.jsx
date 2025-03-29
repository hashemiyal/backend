import ConfrimPasswordComponent from "@/components/ConfirmPassword";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const ConfirmPassword = async({searchParams}) => {
    let session = await getServerSession(authOptions);
    let {userid,newpass}=await searchParams;
    if(!session?.user?.isAdmin){ redirect('/')}
    return ( 
        <>
        <ConfrimPasswordComponent userid={userid} newpass={newpass}/>
        </>
     );
}
 
export default ConfirmPassword;