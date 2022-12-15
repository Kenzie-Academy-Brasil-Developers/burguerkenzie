import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Branding } from '../../components/Branding';
import { FormRegister } from '../../components/Form/FormRegister';
import { UserContainer } from './styles';

export const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        !!localStorage.userToken && navigate('/home');
    }, []);

    return (
        <UserContainer>
            <Branding />
            <FormRegister />
        </UserContainer>
    );
};
