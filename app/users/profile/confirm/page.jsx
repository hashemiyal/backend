import ConfrimPasswordComponent from "@/components/ConfirmPassword";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const ConfirmPassword = async() => {
    let session = await getServerSession(authOptions);
    if(!session?.user?.isAdmin){ redirect('/')}
    return ( 
        <>
        <ConfrimPasswordComponent/>
        </>
     );
}
 
export default ConfirmPassword;