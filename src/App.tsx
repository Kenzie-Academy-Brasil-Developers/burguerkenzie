import { ToastContainer } from 'react-toastify';

import { MainRoutes as Routes } from './routes';

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  return (
    <>
      <Routes />

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
