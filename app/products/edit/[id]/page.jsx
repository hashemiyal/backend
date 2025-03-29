import EditProductComponent from "@/components/EditProductComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const EditProduct = async({params}) => {
    let session= await getServerSession(authOptions)
    if(!session?.user?.isAdmin){ redirect('/')}
    let {id}= await params;
    let res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    let editableproduct= await res.json();
    let catres=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    let brres=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`);
    let categories=await catres.json();
    let brands=await brres.json();
    
    return ( 
      < EditProductComponent editableproduct={editableproduct} brands={brands} categories={categories}/>
     );
}
 
export default EditProduct;