import { createContext } from 'react';
import { UseFormReset } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { IRegisterForm } from '../../components/Form/FormRegister';
import { instance } from '../../services/api';

interface IUserProps {
    children: React.ReactNode;
}

interface IUserContext {
    registerRequest: (data: IRegisterForm, formReset: UseFormReset<IRegisterForm>) => Promise<void>;
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

    return (
        <UserContext.Provider value={{
            registerRequest,
        }}>
            {children}
        </UserContext.Provider>
    );
};
