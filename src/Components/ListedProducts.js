import React, { useContext } from "react";
import "./ListedProducts.css";
import CartContext from "../Store/CartContext";
const ListedProducts = () => {
  const cntx = useContext(CartContext);




  const smallQuantityHandler=(e)=>{
    e.preventDefault()
    
  }


  const mediumQuantityHandler=(e)=>{
    e.preventDefault()
  }


  const largeQuantityHandler=(e)=>{
    e.preventDefault()
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
          </div>
          <div className="buttons">
          <div className="size">
            <button onClick={smallQuantityHandler}>{`small ${item.smallQ}`}</button>
          </div>
          <div className="size">
          <button onClick={mediumQuantityHandler}>{`small ${item.mediumQ}`}</button>
          </div>
          <div className="size">
          <button  onClick={largeQuantityHandler}>{`small ${item.largeQ}`}</button>
          </div>
          </div>
          
        </>
      ))}
    </div>
  );
};

export default ListedProducts;
