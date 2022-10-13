import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; //the home page that contains every thing in this project
import About from './pages/About';
import "./index.scss"; //the main scss for all project
import Cart from './pages/Cart/index';
import { Layout } from "./components"; //layout that has a header sections

////start of App  function///

function App() {
  // const state = {
  //   cartProducts: [
  //     {
  //       id: 1,
  //       title: "product1",
  //       price: 5,
  //       qty: 2,
  //     },
  //     {
  //       id: 2,
  //       title: "product1",
  //       price: 15,
  //       qty: 1,
  //     },
  //     { id: 3, title: "product1", price: 20, qty: 3 },
  //   ],
  // };

  // const { cartProducts } = state;
  // const total = cartProducts.reduce((a, b) => {
  //   return a + b.price * b.qty;
  // }, 0);
  // console.log("total", total);
// .myBtn {
//   border: 0;
//   box-shadow: none;
//   &-red {
//     background-color: #ff0000;
//     &:hover {
//       background-color: #ff0059;
//     }
//   }

//   &-blue {
//     background-color: blue;
//     &:hover {
//       background-color: lightblue;
//     }
//   }
// }

// className="myBtn myBtn-red"
//  $ npm i classnames
// import classNames from "classnames"
// My Button Component
// <button onClick={onClick} className={classNames("myBtn", {
// [`myBtn-${color}`]: color
// })}>{children}</button>

// <MyButton color="red">Ahmad</MyButton>

  return (
    // {/*  bg-effect has a background img , you can see it in index.scss */}
    <div>
      {/* Layout that has a header sections */}
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/cart" exact element={<Cart />} />

        </Routes>
      </Layout>
    </div>
  );
}

export default App; //export App function to use it  in index.js

////End of App  function///
