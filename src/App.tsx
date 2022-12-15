import { ToastContainer } from 'react-toastify';

import { MainRoutes as Routes } from './routes';

import 'react-toastify/dist/ReactToastify.min.css';
import { UserProvider } from './contexts/UserContext/indesx';

function App() {

  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>

      <ToastContainer
        position='top-center'
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
