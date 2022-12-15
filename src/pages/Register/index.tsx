import { useContext, useEffect } from 'react';

import { Branding } from '../../components/Branding';
import { FormRegister } from '../../components/Form/FormRegister';
import { UserContext } from '../../contexts/UserContext';
import { UserContainer } from './styles';

export const Register = () => {
    const { navigate } = useContext(UserContext);

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
