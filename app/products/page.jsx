import ProductComponent from "@/components/ProductComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const Products = async () => {
   let session= await getServerSession(authOptions);
   if (!session?.user?.isAdmin){ redirect('/')}
   let prres=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
   let products=await prres.json();
    return ( 
       <ProductComponent products={products}/>
     );
}
 
export default Products;