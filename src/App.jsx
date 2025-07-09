import { useState } from 'react';

import Header from './components/Header';
import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import products from "./data/products";

import './styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); 

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const toggleCartVisibility = () => {
    setShowCart(prev => !prev);
  };

  return (
    <div>
      <div className="header">
        <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                onCartClick={toggleCartVisibility}
        />
       {showCart && <Cart cartItems={cartItems} />}
      </div>
      <h1 className="title"> Fingertips Store</h1>
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
             onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
