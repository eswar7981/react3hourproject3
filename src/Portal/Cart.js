import React from 'react'
import CartItems from './CartItems'
import './Cart.css'
import ReactDOM  from 'react-dom'
const elem=document.getElementById("portal")


const Cart = (props) => {

  
  return (
    <>
   
   { ReactDOM.createPortal(<CartItems/>,elem)}
   </>
  )
}

export default Cart
