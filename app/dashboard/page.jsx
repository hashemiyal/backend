import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const Dashboard = async () => {
    let session= await getServerSession(authOptions);
    if(!session?.user?.isAdmin){ redirect('/')}
    return ( 
        <>
        <Sidebar/>
        <h1>Welcome to the Dashboard.<strong>{session?.user?.username} </strong><MdDashboard /></h1>
        <Link href={"http://localhost:3000/"}>Home</Link>
        </>
     );
}
 
export default Dashboard;