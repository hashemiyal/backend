import CreateProductComponent from "@/components/CreateProductComponent";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const NewProduct = async () => {

    let session= await getServerSession(authOptions);
    if(!session?.user?.isAdmin){ redirect('/')}
    let catres=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    let brres=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`);
    let categories=await catres.json();
    let brands=await brres.json();
    return ( 
        <div><CreateProductComponent categories={categories} brands={brands}/></div>
     );
}
 
export default NewProduct;