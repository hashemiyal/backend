"use client"
import Link from "next/link";
import { redirect } from "next/navigation";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const BrandComponent = () => {
    let brands=[{id:223,title:"Brand 1"},{id:224,title:"Brand 2"},{id:225,title:"Brand 3"}]
    function hadleDelete(id){
     
    }
    return ( 
        <div>
       
        <h1>List of All Available Brands</h1>
        <hr />
        <Link href="/brands/new">
          <button>Add New Brand</button>
        </Link>
        <hr />
  
        <table className="has-text-centered">
          <thead>
            <tr>
              <th>Number</th>
              <th>Brand Name</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {
              brands.map((product,index)=>(
                <tr key={product.id}>
                  <td>{index+1}</td>
                  <td>{product.title}</td>
                  <td >
            
                    <button className="button is-danger has-text-centered" onClick={hadleDelete(product._id)}><RiDeleteBin6Fill /></button>
                    <button className="button is-success has-text-centered" onClick={()=>{redirect(`products/edit/${product._id}`)}}><MdEdit /></button>
                   
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
     );
}
 
export default BrandComponent;