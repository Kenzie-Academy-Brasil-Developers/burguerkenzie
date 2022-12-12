import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { instance } from './services/api';

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

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
          setFilteredProducts={setFilteredProducts}
          filteredProducts={filteredProducts}
          inputValue={inputValue}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      </main>
      <ToastContainer
        position="top-center"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
