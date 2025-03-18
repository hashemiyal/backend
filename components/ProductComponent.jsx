"use client"
import Link from "next/link";
import { redirect } from "next/navigation";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
const ProductComponent = ({products}) => {
    const hadleDelete=(id)=>async()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then((res) => {res.json();if(res.ok){redirect('/products')}}).then((data) => {console.log(data)});
            }
          });
    }
   
    return ( 
        <div>
        <h1>List of All Available Products</h1>
        <hr />
        <Link href="/products/new">
          <button>Add New Product</button>
        </Link>
        <hr />
  
        <table className="has-text-centered">
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {
              products.map((product,index)=>(
                <tr key={product._id}>
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
 
export default ProductComponent;