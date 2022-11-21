import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { instance } from './services/api';

import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    instance.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="App">
      <Header />
      <main>
      </main>
    </div>
  );
}

export default App;
