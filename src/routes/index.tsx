import { Navigate, Route, Routes } from 'react-router-dom';

import { CartProvider } from '../contexts/CartContext';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={
                <CartProvider>
                    <Home />
                </CartProvider>
            }
            />
            <Route path='*' element={<Navigate to='' />} />
        </Routes>
    );
};
