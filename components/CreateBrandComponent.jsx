"use client"
import swal from "sweetalert";
import Link from "next/link";
import { useState } from "react";
const BrandComponent = () => {
    let [name,setName]=useState('');
    let [description,setDescription]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        let brand={name:name,description:description};
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(brand)}).then(res=>res.json()).then(data=>{console.log(data); swal("Brand Added Successfully");});   
        setName('');
        setDescription ('');   
       
    }
    return (  
        <div>
       <h1>Add New Brand</h1>
       <hr />
       <form onSubmit={handleSubmit}>
           <input type="text" name="stock" placeholder="Brand Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
           <textarea name="description" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
           <button type="sumbit">Save Brand</button>
            <Link href={'/products'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
       </form>
   </div>
    );
}
 
export default BrandComponent;