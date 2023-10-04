import React, { useContext } from 'react'
import './CartItems.css'
import CartContext from '../Store/CartContext'
const CartItems = () => {
    
    const cntx=useContext(CartContext)

    const cartCloseHandler=(e)=>{
        e.preventDefault()
        cntx.closeCart()
    }

  return (
    <div className='modals'>
      <div>
      <div className='close'>
        <button onClick={cartCloseHandler}>X</button>
      </div>
        <div className='items'>
            <h1>Cart</h1>
            {cntx.cart.map((item)=>(
                <>
                <div className='item'>
                <h1>{item.productName}</h1>
                <h1>{item.smallQ}</h1>
                <h1>{item.mediumQ}</h1>
                <h1>{item.largeQ}</h1>
                </div>
                </>
            ))}
            
        </div>
      </div>
      <div className='order'>
        <button onClick={()=>{alert('Hurray,order is succesful')}}>Order</button>
      </div>
      
    </div>
  )
}

export default CartItems
