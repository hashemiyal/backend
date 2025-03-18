"use client"
import Link from "next/link";
const CategoryComponent = () => {
    function handleSubmit(e){}
    return (  
        <div>
       <h1>Add New Category</h1>
       <hr />
       <form onSubmit={handleSubmit}>
          
           <input type="text" name="stock" placeholder="Category Name" />
           <button type="sumbit">Save Category</button>
            <Link href={'/products'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
       </form>
   </div>
    );
}
 
export default CategoryComponent;