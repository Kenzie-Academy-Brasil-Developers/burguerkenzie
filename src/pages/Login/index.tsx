import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Branding } from '../../components/Branding';
import { FormLogin } from '../../components/Form/FormLogin';
import { UserContainer } from './styles';

export const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        !!localStorage.userToken && navigate('/home');
    }, []);

    return (
        <UserContainer>
            <FormLogin />
            <Branding />
        </UserContainer>
    );
};
