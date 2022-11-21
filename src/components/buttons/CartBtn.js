import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartBtn = () => {
  const state=useSelector((state)=>state.handleCart)
  console.log(state);
  let sum=0
  let totalPrice=0
  for (let i = 0; i < state.length; i++) {
    sum+=state[i].qty
    
  }
  for (let i = 0; i < state.length; i++) {
    totalPrice+=state[i].price*state[i].qty
    
  }
  console.log(sum);
  console.log(totalPrice);
  return (
    <>
      <Link to='/cart' className='btn btn-outline-light ms-2 '>
        <span className='fa fa-shopping-cart me-1'></span> Cart({sum})
      </Link>
       
    </>
  )
}

export default CartBtn