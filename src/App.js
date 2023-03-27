import Cart from './components/cart/cart.js';
import Shop from './components/shop/shop.js';
import Navbar from './components/navbar/navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data.js';
import { useState, useEffect, startTransition } from 'react';
import Footer from './components/footer/footer.js';

function App() {

  const { products } = data;

  const [ cartItems, setCartItems ] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
      x.id === product.id ? { ...exist, qty: exist.qty + 1} : x)
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1}]
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id)
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = cartItems.map((x) =>
      x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id)
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  useEffect(() => {
    startTransition(() => {
      setCartItems(localStorage.getItem('cartItems') ? 
      JSON.parse(localStorage.getItem('cartItems')) : [])})
  }, [])

  const allItemsInCartQty = cartItems.reduce((a, c) => a + c.qty, 0);

  return (
    <Router>
      <div className="App">
        <Navbar 
          allItemsInCartQty={allItemsInCartQty}
        />
        <div className='content'>
          <Switch>
            <Route exact path="/cart">
              <Cart
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                cartItems={cartItems}
              />
            </Route>
            <Route exact path="/">
              <Shop 
                products={products}
                onAdd={onAdd}
                cartItems={cartItems}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
