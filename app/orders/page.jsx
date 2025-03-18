import OrderComponent from "@/components/OrderListComponent";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Orders = async() => {
    let session= await getServerSession(authOptions);
    if(!session?.user?.isAdmin){ redirect('/')}

    let res=await fetch("http://localhost:3001/api/orders");
    let orders= await res.json();
    return ( 
      <OrderComponent orders={orders} />
     );
}
 
export default Orders;