import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { UserContext } from '../../../contexts/UserContext';
import { Button, SecondaryLink } from '../../../styles/buttons';
import { loginSchema } from './loginSchema';
import { FormLoginContainer } from './styles';

export interface ILoginForm {
    email: string;
    password: string;
}

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ILoginForm>({
        mode: 'onChange',
        resolver: yupResolver(loginSchema)
    });

    const { loginRequest } = useContext(UserContext);

    const sendToApi = (data: ILoginForm) => loginRequest(data, reset);

    return (
        <FormLoginContainer>
            <div>
                <h4>Login</h4>
            </div>
            <form noValidate onSubmit={handleSubmit(sendToApi)}>
                <TextField
                    label='Email'
                    variant='outlined'
                    fullWidth
                    {...register('email')}
                    helperText={errors.email?.message}
                    error={!!errors.email}
                />
                <TextField
                    type='password'
                    label='Senha'
                    variant='outlined'
                    fullWidth
                    {...register('password')}
                    helperText={errors.password?.message}
                    error={!!errors.password}
                />
                <Button type='submit' variant='defaultGreen'>Logar</Button>
            </form>
            <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
            <SecondaryLink to='/register'>Cadastrar</SecondaryLink>
        </FormLoginContainer>
    );
};
