import { TextField } from '@mui/material';
import { Button, DefaultLink } from '../../../styles/buttons';
import { FormContainer } from './styles';

export const FormRegister = () => {
    return (
        <FormContainer>
            <div>
                <h4>Cadastro</h4>
                <DefaultLink to='/'>Retornar para o login</DefaultLink>
            </div>
            <form noValidate>
                <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Senha" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Confirmar Senha" variant="outlined" fullWidth />
                <Button type='submit' variant='defaultGrey'>Cadastrar</Button>
            </form>
        </FormContainer>
    );
};
