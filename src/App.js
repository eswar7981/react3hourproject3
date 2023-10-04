import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import CartProvider from './Store/CartProvider';

function App() {
  return (
    <>
    <CartProvider>
    <Products/>
    </CartProvider>
    </>
  );
}

export default App;
