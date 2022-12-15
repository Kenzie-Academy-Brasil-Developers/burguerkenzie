import { useContext, useEffect } from 'react';

import { Branding } from '../../components/Branding';
import { FormLogin } from '../../components/Form/FormLogin';
import { UserContext } from '../../contexts/UserContext';
import { UserContainer } from './styles';

export const Login = () => {
    const { navigate } = useContext(UserContext);

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
