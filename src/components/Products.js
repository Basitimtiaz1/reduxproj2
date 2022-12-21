import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { json } from 'react-router-dom';
function Products() {
  const data=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const {data:products,Status}=(useSelector((state)=>state.product));
  //setProducts(items);
//const [products,setProducts]=useState([]);
useEffect(()=>{
  dispatch(fetchProducts());
//     const fetchProducts=async()=>{
// const response=await fetch("https://fakestoreapi.com/products");
// //console.log(response);
// const data=await response.json();
// console.log(data);
// //setProducts(data);
//     };
//     fetchProducts();
    
},[])
 
  return (
    <div className='productsWrapper'>
     
{
  products.map(product=>{
    const handleAdd=(product)=>{
      dispatch(add(product));
      const val={
        product,
      }
     // localStorage.setItem('cartItems',val)
    localStorage.setItem('cartItems',JSON.stringify(val));
    }
    return(
<div className='card' key={product.id}>
<h1>{product.Prname}</h1>
      <img src={product.image} alt='{product.image}' className='imgWrap' width='80px'/>
   
    <h4>{product.prname}</h4>
    <button onClick={()=>handleAdd(product)} className='add' >Add to Cart</button>
    </div>

    )

  })
}

    </div>   
  )
}

export default Products