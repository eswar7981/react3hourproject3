import React from 'react'

const CartContext = 
React.createContext({
    products:[],
    cartItems:[],
    largeProductAdd:(id)=>{},
    smallProductAdd:(id)=>{},
    mediumProductAdd:(id)=>{},
    AddingProduct:(id)=>{},
    RemovingProduct:(id)=>{},
    openCart:()=>{},
    closeCart:()=>{},
    cart:[],
})

export default CartContext
