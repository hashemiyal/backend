import ProductComponent from "@/components/ProductComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const Products = async () => {
   let session= await getServerSession(authOptions);
   if (!session?.user?.isAdmin){ redirect('/')}
   let res=await fetch("http://localhost:3001/api/products");
   let products=await res.json();
    return ( 
       <ProductComponent products={products}/>
     );
}
 
export default Products;