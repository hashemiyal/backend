import CreateProductComponent from "@/components/CreateProductComponent";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const NewProduct = async () => {
    let session= await getServerSession(authOptions);
    if(!session?.user?.isAdmin){ redirect('/')}
    return ( 
        <div><CreateProductComponent/></div>
     );
}
 
export default NewProduct;