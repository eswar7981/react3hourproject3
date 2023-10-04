import React, { useContext } from 'react'
import CartContext from '../Store/CartContext'
import './CartButton.css'
const CartButton = () => {

    const cntx=useContext(CartContext)

  
  const cartHandler=(e)=>{
    e.preventDefault()
    cntx.openCart()

  }
  
    return (
    <div className='but'>
        <button onClick={cartHandler}>
            <span>
                cart  
                {cntx.cartItems.length}
            </span>
        </button>
    </div>
  )
}

export default CartButton
