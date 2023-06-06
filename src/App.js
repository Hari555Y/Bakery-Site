import './App.css';
import React, {useState} from 'react';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const deleteFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== product));
  };
  return (
    <div>
      <h2 className = "firstheader">Our Products</h2>
      <Product
        description="Ice cream"
        addToCart={addToCart}
        deleteFromCart={deleteFromCart()}
      />
      <Product
        description="Pastry"
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
      />
      <Product
        description="Cake"
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
      />
      <Product
        description="Cookies"
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
      />
      <Cart />
    </div>
  );
};

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
