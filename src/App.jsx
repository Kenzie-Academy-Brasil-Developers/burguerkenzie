import { useEffect, useState } from 'react';

import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { instance } from './services/api';

import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    instance.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        setInputValue={setInputValue}
      />
      <main className='container'>
        <ProductsList
          data={products}
          setCurrentSale={setCurrentSale}
          filteredProducts={filteredProducts}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      </main>
    </div>
  );
}

export default App;
