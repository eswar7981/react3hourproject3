import React, { useContext, useState } from 'react'
import './Products.css'
import ListedProducts from './ListedProducts'
import CartContext from '../Store/CartContext'
import Cart from '../Portal/Cart'
import CartButton from '../Portal/CartButton'
const Products = () => {
  const cntx=useContext(CartContext)
  const [productName,setProductName]=useState('')
  const [data,setData]=useState()
  const [details,setDetails]=useState( {id:4,productName:'',description:'',price:'',smallQ:null,mediumQ:null,largeQ:null}
)
  

  const nameHandler=(e)=>{
    console.log(e.target.value)
    setProductName(e.target.value)
    cntx.products.map((item)=>{
      if(item.productName===e.target.value){
        setData(item)
        setDetails(item)
    }})
  
  }

  const submitdataHandler=(e)=>{
    e.preventDefault()
    cntx.AddingProduct(data)
  }


  return (
    <>
    <div>
      <CartButton></CartButton>
    </div>
      <div className='form1' >
        <form onSubmit={submitdataHandler}>
        <div className='ProductName'>
            <label>Product Name</label>
            <select  onChange={nameHandler}>
            <option value="Gucci shoes"  ></option>
    <option value="Gucci shoes"  >Gucci shoes</option>
    <option value="Gucci sprinter shoes" >Gucci sprinter shoes</option>
    <option value="Crocs" >Crocs</option>
    <option value="Crocs shoes">Crocs shoes</option>
  </select>
        
        </div>
        <div className='Description'>
            <label>Description</label>
            <input type='text' value={details.description} required></input>
        </div>
        <div className='Price'>
            <label>Price</label>
            <input type='text' value={details.price} required></input>
        </div>
        <div className='S'>
            <label>S</label>
            <input type='text' value={details.smallQ} required></input>
        </div>
        <div className='M'>
            <label>M</label>
            <input type='text' value={details.mediumQ} required></input>
        </div>
        <div className='L'>
            <label>L</label>
            <input type='text' value={details.largeQ} required></input>
        </div>
        <div className='button'>
            <button>Add Product</button>
        </div>
        </form>
      </div>
      <ListedProducts></ListedProducts>
     {cntx.cartOpen && <Cart></Cart>}
    </>
  )
}

export default Products
