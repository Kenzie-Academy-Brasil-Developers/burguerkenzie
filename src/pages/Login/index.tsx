import { Branding } from '../../components/Branding';
import { FormLogin } from '../../components/Form/FormLogin';
import { UserContainer } from './styles';

export const Login = () => {
    return (
        <UserContainer>
            <FormLogin />
            <Branding />
        </UserContainer>
    );
};
