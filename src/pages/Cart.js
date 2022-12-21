import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
const Cart = () => {
  const products=useSelector((state)=>state.cart);
  const data=useSelector((state)=>state.cart);
  console.log("Cart"+data);
  //const chk=localStorage.getItem('cartItems')?localStorage.setItem('cartItems',JSON.stringify(data)):[]
  
  const {price}=data;
  console.log(data);
  const dispatch=useDispatch();
  const handleremove=(productid)=>{
  dispatch(remove(productid));
}
  return (
    <div>
      <h1>Price</h1>
      <div className='cartWrapper'>
      {
        products.map(item=>{
          return(
            <div className='cartCard' key={item.id}>
              <h5>{item.Prname}</h5>
            <img src={item.image} alt="" width='80px'/>
            <h5>{item.Prname}</h5>
            <h5>{item.price}</h5>
            <button className='btnclas' onClick={()=>handleremove(item.id)}>Remove</button>
          </div>
          )
        })
      }
      </div>
    </div>
  )
}
export default Cart