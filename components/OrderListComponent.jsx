"use client"
import { redirect } from "next/navigation";
import swal from "sweetalert";
const OrderComponent = ({orders}) => {
    return ( 
        <div>
           <h1>List of All Available Orders</h1>
                  <hr />
                 
               
            
          <table className="has-text-centered">
          <thead>
            <tr>
            <th>No #</th>
              <th>User</th>
              <th>Email</th>
              <th>Address</th>
              <th>TotalPrice</th>
              <th>Status</th>
              <th>Date</th>
              <th>Products</th>
              <th>Actions </th>
            </tr>
          </thead>
  
          <tbody>
            {
              orders.map((order,index)=>(
                <tr key={order._id}>
                   <th>{index+1}</th>
                  <td>{order.user.name}</td>
                  <td>{order.user.email}</td>
                  <td>{order.user.country}-{order.user.city}-{order.user.postalCode}</td>
                  <td>{order.totalPrice} افغانی</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.createAt).toLocaleDateString("fa-IR")}</td>
                  <td>{order.cart.map(item=>(<p key={item._id}>{item.title} - NO : {item.quantity} </p>
                  ))}</td>
                  <td>
                    <button className="button" style={{marginBottom:"5px"}}>انتقال</button>
                    <button className="button is-danger" onClick={()=>{swal({
  title: "آیا مطمین استید ?",
  text: "اطلاعات خذف شده دوباره بدست نمی اید!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${order._id}`, {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }).then((res) => {res.json();if(res.ok){redirect('/orders')}}).then((data) => {console.log(data)});
    swal("اطلاعات مرورد نظر حذف شد !", {
      icon: "success",
      
    });
  } else {
    swal("اطلاعات شما محفوظ میباشد !");
  }
});}}>حذف</button>
                  </td>
                </tr>
              )) 
            }
          </tbody>
        </table>
        </div> 
     );
}
 
export default OrderComponent;