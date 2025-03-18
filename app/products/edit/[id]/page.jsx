import EditProductComponent from "@/components/EditProductComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const EditProduct = async({params}) => {
    let session= await getServerSession(authOptions)
    if(!session?.user?.isAdmin){ redirect('/')}
    let {id}= await params;
    let res=await fetch(`http://localhost:3001/api/products/${id}`)
    let editableproduct= await res.json();
    
    return ( 
      < EditProductComponent editableproduct={editableproduct}/>
     );
}
 
export default EditProduct;