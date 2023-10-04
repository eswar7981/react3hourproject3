import React, { useContext } from "react";
import "./ListedProducts.css";
import CartContext from "../Store/CartContext";
const ListedProducts = () => {
  const cntx = useContext(CartContext);




  const smallQuantityHandler=(e,item)=>{
    e.preventDefault()
    if(item.smallQ===0){
      alert('sorry product is out of stock')
    }
    else{
      cntx.smallProductAdd(item)
    }
   
    
  }


  const mediumQuantityHandler=(e,item)=>{
    e.preventDefault()
    if(item.mediumQ===0){
      alert('sorry product is out of stock')
    }
    else{
      cntx.mediumProductAdd(item)
    }
    
  }


  const largeQuantityHandler=(e,item)=>{
    e.preventDefault()
    if(item.largeQ===0){
      alert('sorry product is out of stock')
    }
    else{
      cntx.largeProductAdd(item)
    }
  }





  return (
    <div className="form2">
    
      {cntx.cartItems.map((item) => (
        <>
        <div className="cont">
          <div className="Name">
           <h1>{item.productName}</h1> 
          </div>
          <div className="Name">
           <h1>{item.description}</h1> 
          </div>
          <div className="Name">
            <h1>{item.price}</h1>
          </div>
         
          <div className="buttons">
          <div className="size">
            <button onClick={(e)=>smallQuantityHandler(e,item)}>{`small ${item.smallQ}`}</button>
          </div>
          <div className="size">
          <button onClick={(e)=>mediumQuantityHandler(e,item)}>{`medium ${item.mediumQ}`}</button>
          </div>
          <div className="size">
          <button  onClick={(e)=>largeQuantityHandler(e,item)}>{`large ${item.largeQ}`}</button>
          </div>
          </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ListedProducts;
