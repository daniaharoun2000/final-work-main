// import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
export default function CCart() {
  return (
    <div>
      <CartProvider>
        <Cart />
       <Home/>
      </CartProvider>
    </div>
  );
}
