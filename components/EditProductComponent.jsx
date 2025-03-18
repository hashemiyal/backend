"use client"
import { redirect } from "next/navigation";
import { useState } from "react";
import swal from 'sweetalert';
import Link from "next/link";
const EditProductComponent = ({editableproduct}) => {
   console.log(editableproduct);
   let [product,setproduct]=useState(editableproduct);
   async function handleUpdate(e) {
      e.preventDefault();
      let res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${product._id}`,{method:"PUT",headers:{ "Content-Type": "application/json",},body:JSON.stringify(product)});
      if(res.ok){
        swal("Good job!", "Select Product updated!", "success");
       redirect('/products');
      }
  
   }
    return ( 
        <div>
      
        <h1>Edit the Product below</h1>
        <form onSubmit={handleUpdate}>
            <input onChange={(e)=>{setproduct({...product,title:e.target.value})}} value={product.title} type="text" name="title" placeholder="title"/>
            <input value={product.price} type="number" name="price" placeholder="price" onChange={(e)=>{setproduct({...product,price:e.target.value})}}/>
            <input value={product.image_url}  type="text" name="image" placeholder="image url" onChange={(e)=>{setproduct({...product,image_url:e.target.value})}}/>
            <textarea value={product.description} name="description" placeholder="description" onChange={(e)=>{setproduct({...product,description:e.target.value})}}></textarea>
            <select value={product.category} name="category" onChange={(e)=>{setproduct({...product,category:e.target.value})}} >
                <option value="لپتاپ" disabled>select Category</option>
                <option value="laptop">laptop</option>
                <option value="mobile">mobile</option>
                <option value="tablet">tablet</option>
                <option value="tv">tv</option>
                <option value="other">other</option>
            </select>
            <select name="brand" value={product.brand} onChange={(e)=>{setproduct({...product,brand:e.target.value})}}>
            <option value="لپتاپ" disabled>select Brand</option>
                <option value="addidas">addidas</option>
                <option value="nike">nike</option>
                <option value="apple">apple</option>
                <option value="samsung">samsung</option>
                <option value="other">other</option>
            </select>
            <input type="number" value={product.stock} name="stock" placeholder="Quantity in Stock" onChange={(e)=>{setproduct({...product,stock:e.target.value})}} />
            <button type="sumbit">Save new info</button>
            <Link href={'/products'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
        </form>
    </div>
     );
}
 
export default EditProductComponent;