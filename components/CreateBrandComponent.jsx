"use client"
import Link from "next/link";
const BrandComponent = () => {
    function handleSubmit(e){}
    return (  
        <div>
       <h1>Add New Brand</h1>
       <hr />
       <form onSubmit={handleSubmit}>
          
           <input type="text" name="stock" placeholder="Brand Name" />
           <button type="sumbit">Save Brand</button>
            <Link href={'/products'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
       </form>
   </div>
    );
}
 
export default BrandComponent;