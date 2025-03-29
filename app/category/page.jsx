import CategoryComponent from "@/components/CategoryComponent";

const Category = async() => {
    let res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    let categories=await res.json();
   
    return ( 

        <>
        <CategoryComponent categories={categories}/>
        </>
     );
}
 
export default Category;