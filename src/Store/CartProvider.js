import React, { Profiler, useState } from "react";
import CartContext from "./CartContext";
const CartProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Gucci shoes",
      description: "casual shoes",
      price: "9999",
      smallQ: 10,
      mediumQ: 45,
      largeQ: 32,
    },
    {
      id: 2,
      productName: "Gucci sprinter shoes",
      description: "sports special",
      price: "2999",
      smallQ: 10,
      mediumQ: 45,
      largeQ: 32,
    },
    {
      id: 3,
      productName: "Crocs",
      description: "all purpose",
      price: "999",
      smallQ: 10,
      mediumQ: 45,
      largeQ: 32,
    },
    {
      id: 4,
      productName: "Crocs shoes",
      description: "premium wear",
      price: "3999",
      smallQ: 10,
      mediumQ: 45,
      largeQ: 32,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addProduct = (item) => {
    setCartItems([...cartItems, item]);
  };

  const openCart = () => {
    setCartOpen(true);
    console.log(cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const removeProduct = (item) => {};

  const smallQuantityAdd = (item) => {
    console.log(item);
    const itemIspresent = cart.some((prod) => {
      if (prod.title === item.title) {
        return true;
      }
      return false;
    });

    setCartItems(
      cartItems.map((prod) => {
        if (prod.id === item.id) {
          return {
            ...prod,
            smallQ: prod.smallQ - 1,
          };
        }

        return prod;
      }))

    if (itemIspresent) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return {
              ...prod,

              smallQ: prod.smallQ + 1,
            };
          }

          return prod;
        })
      );
    } else {
      setCart([...cart, { ...item, smallQ: 1, mediumQ: 0, largeQ: 0 }]);
      
    }

    console.log(cart);
  };

  const mediumQuantityAdd = (item) => {
    const itemIspresent = cart.some((prod) => {
      if (prod.title === item.title) {
        return true;
      }
      return false;
    });

    setCartItems(
      cartItems.map((prod) => {
        if (prod.id === item.id) {
          return {
            ...prod,
            mediumQ: prod.mediumQ - 1,
          };
        }

        return prod;
      }))


    if (itemIspresent) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return {
              ...prod,

              mediumQ: prod.mediumQ + 1,
            };
          }

          return prod;
        })
      );
    } else {
      setCart([...cart, { ...item, smallQ: 0, mediumQ: 1, largeQ: 0 }]);
    }

    console.log(cart);
  };

  const largeQuantityAdd = (item) => {
    const itemIspresent = cart.some((prod) => {
      if (prod.title === item.title) {
        return true;
      }
      return false;
    });


    setCartItems(
      cartItems.map((prod) => {
        if (prod.id === item.id) {
          return {
            ...prod,
            largeQ: prod.largeQ - 1,
          };
        }

        return prod;
      }))

    if (itemIspresent) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return {
              ...prod,

              largeQ: prod.largeQ + 1,
            };
          }

          return prod;
        })
      );
    } else {
      setCart([...cart, { ...item, smallQ: 0, mediumQ: 0, largeQ: 1}]);
    }

    console.log(cart);
  };

  const cartContext = {
    AddingProduct: addProduct,
    RemovingProduct: removeProduct,
    products: products,
    cartItems: cartItems,
    smallProductAdd: smallQuantityAdd,
    mediumProductAdd: mediumQuantityAdd,
    largeProductAdd: largeQuantityAdd,
    openCart: openCart,
    closeCart: closeCart,
    cartOpen: cartOpen,
    cart: cart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
