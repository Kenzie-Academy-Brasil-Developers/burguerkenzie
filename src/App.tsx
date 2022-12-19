import { ToastContainer } from 'react-toastify';

import { UserProvider } from './contexts/UserContext';
import { MainRoutes as Routes } from './routes';

import { ThemeProvider } from '@mui/material';
import { LightTheme } from './themes/Light';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ThemeProvider>

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
