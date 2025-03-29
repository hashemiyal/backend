import BrandComponent from "../../components/BrandComponent";
const Brand = async() => {
    let res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`);
    let brands=await res.json();
    return ( 
        <>
        <BrandComponent brands={brands}/>
        </>
     );
}
 
export default Brand;