import { Branding } from '../../components/Branding';
import { FormRegister } from '../../components/Form/FormRegister';
import { UserContainer } from './styles';

export const Register = () => {
    return (
        <UserContainer>
            <Branding />
            <FormRegister />
        </UserContainer>
    );
};
