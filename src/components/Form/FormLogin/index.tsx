import { TextField } from '@mui/material';
import { Button, SecondaryLink } from '../../../styles/buttons';

import { FormLoginContainer } from './styles';

export const FormLogin = () => {
    return (
        <FormLoginContainer>
            <div>
                <h4>Login</h4>
            </div>
            <form noValidate>
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField type='password' label="Senha" variant="outlined" fullWidth />
                <Button type='submit' variant='defaultGreen'>Logar</Button>
            </form>
            <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>        
            <SecondaryLink to='/register'>Cadastrar</SecondaryLink>
        </FormLoginContainer>
    );
};
