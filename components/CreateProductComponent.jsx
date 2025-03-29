"use client"
import { redirect } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

const CreateProductComponent = ({brands,categories}) => {
   let [title,settitle]=useState("");
   let [price,setprice]=useState("");
   let [image,setimage]=useState("");
   let [description,setdescription]=useState("");
   let [category,setcategory]=useState("");
   let [brand,setbrand]=useState("");
   let [stock,setstock]=useState("");
 async function handleSubmit(e){
     e.preventDefault()
    let product={title:title,price:price,description:description,image_url:image,category:category,brand:brand,stock:stock};
    
   let res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`,{method:"POST",headers:{ "Content-Type": "application/json",},body:JSON.stringify(product)});
    if(res.ok){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product has been added",
            showConfirmButton: false,
            timer: 1500
          });
          settitle("");
          setprice("")
          setdescription("")
          setimage("")
          setcategory("")
          setbrand("")
          setstock("");
          redirect('/products')
    }
   
  }
    return ( 
        <div>
      
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} name="title" placeholder="title" required/>
            <input type="number" value={price} onChange={(e)=>setprice(e.target.value)}  name="price" placeholder="price" required/>
            <input  type="text" value={image} onChange={(e)=>setimage(e.target.value)} name="image" placeholder="image url" required/>
            <textarea name="description" value={description} onChange={(e)=>setdescription(e.target.value)} placeholder="description" required></textarea>
            <select defaultValue={"none"}  onChange={(e)=>setcategory(e.target.value)} name="category" required >
                <option value="none" disabled >select Category</option>
                {categories.map((category,index)=>{
                    return <option key={index} value={category.name}>{category.name}</option>
                })}
            </select>
            <select defaultValue={"none"} name="brand" onChange={(e)=>setbrand(e.target.value)} required>
            <option value="none" disabled>select Brand</option>
            {brands.map((brand,index)=>{
                return <option key={index} value={brand.name}>{brand.name}</option>
            })}
            </select>
            <input type="number" value={stock} name="stock" placeholder="Quantity in Stock" onChange={(e)=>setstock(e.target.value)} required/>
            <button type="sumbit">Save product</button>
             <Link href={'/products'} style={{color:"#de313f",marginLeft:"5px"}}>Cencel</Link>
        </form>
    </div>

     );
}
 
export default CreateProductComponent;