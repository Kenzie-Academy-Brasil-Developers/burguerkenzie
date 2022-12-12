import { ToastContainer } from 'react-toastify';

import { Header } from './components/Header';
import { CartProvider } from './contexts/CartContext';
import { Home } from './pages/Home';

import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {

  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>

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
    </>
  );
}

export default App;
