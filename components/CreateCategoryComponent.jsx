"use client"
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";
import swal from "sweetalert";
const CategoryComponent = () => {
    let [name,setName]=useState('');
    let [description,setDescription]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        let category={name:name,description:description};
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(category)})
        .then(res=>res.json()).then(data=>{console.log(data);swal("Category Added Successfully");});
        setName('');
        setDescription('');

    }
    return (  
        <div>
       <h1>Add New Category</h1>
       <hr />
       <form onSubmit={handleSubmit}>
          
           <input type="text" name="stock" placeholder="Category Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
           <textarea name="description" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
           <button type="sumbit">Save Category</button>
            <Link href={'/products'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
       </form>
   </div>
    );
}
 
export default CategoryComponent;