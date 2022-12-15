import { createContext } from 'react';
import { UseFormReset } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ILoginForm } from '../../components/Form/FormLogin';
import { IRegisterForm } from '../../components/Form/FormRegister';
import { instance } from '../../services/api';

interface IUserProps {
    children: React.ReactNode;
}

interface IUserContext {
    registerRequest: (data: IRegisterForm, formReset: UseFormReset<IRegisterForm>) => Promise<void>;
    loginRequest: (formData: ILoginForm, formReset: UseFormReset<ILoginForm>) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
    const navigate = useNavigate();

    const registerRequest = async (data: IRegisterForm, formReset: UseFormReset<IRegisterForm>) => {
        try {
            await instance.post('/users', data);

            toast.success('Conta criada com sucesso!');
            formReset();
            navigate('/');

        } catch (err) {
            toast.error('Ops! Algo deu errado.');
        }
    };

    const loginRequest = async (formData: ILoginForm, formReset: UseFormReset<ILoginForm>) => {
        try {
            const { data } = await instance.post('/login', formData);

            toast.success('Login efetuado!');
            localStorage.clear();
            localStorage.setItem('userToken', data.accessToken);
            formReset();
            navigate('/home');

        } catch (err) {
            toast.error('Ops! Algo deu errado.');
        }
    };

    return (
        <UserContext.Provider value={{
            registerRequest,
            loginRequest,
        }}>
            {children}
        </UserContext.Provider>
    );
};
