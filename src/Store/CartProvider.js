import React, { useState } from 'react'
import CartContext from './CartContext'
const CartProvider = (props) => {
  const [products,setProducts]=useState([
     {id:1,productName:'Gucci shoes',description:'casual shoes',price:'9999',smallQ:10,mediumQ:45,largeQ:32},
     {id:2,productName:'Gucci sprinter shoes',description:'sports special',price:'2999',smallQ:10,mediumQ:45,largeQ:32},
     {id:3,productName:'Crocs',description:'all purpose',price:'999',smallQ:10,mediumQ:45,largeQ:32},
     {id:4,productName:'Crocs shoes',description:'premium wear',price:'3999',smallQ:10,mediumQ:45,largeQ:32}
    ])


    const [cart,setCart]=[]

    const [cartItems,setCartItems]=useState([ {id:1,productName:'Gucci shoes',description:'casual shoes',price:'9999',smallQ:10,mediumQ:45,largeQ:32}])
 
   
   const addProduct=(item)=>{
    setCartItems([...cartItems,item])
   }


   const removeProduct=(item)=>{

   }
   
   
   
    const smallQuantityAdd=(id)=>{

    }

    const mediumQuantityAdd=(id)=>{
        
    }

    const largeQuantityAdd=(id)=>{
        
    }

  const cartContext={
    AddingProduct:addProduct,
    RemovingProduct:removeProduct,
    products:products,
    cartItems:cartItems,
    smallProductAdd:smallQuantityAdd,
    mediumProductAdd:mediumQuantityAdd,
    largeProductAdd:largeQuantityAdd
    
  }

  return (
    <CartContext.Provider value={cartContext}>
{props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
