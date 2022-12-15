import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { Button, DefaultLink } from '../../../styles/buttons';
import { registerSchema } from './registerSchema';
import { FormContainer } from './styles';

export interface IRegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPwd?: string;
}

export const FormRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>({
        mode: 'onChange',
        resolver: yupResolver(registerSchema),
    });

    const sendToApi = (data: IRegisterForm) => {
        delete data.confirmPwd;
        console.log(data);
    };

    return (
        <FormContainer>
            <div>
                <h4>Cadastro</h4>
                <DefaultLink to='/'>Retornar para o login</DefaultLink>
            </div>
            <form noValidate onSubmit={handleSubmit(sendToApi)}>
                <TextField
                    label='Nome'
                    variant='outlined'
                    fullWidth
                    {...register('name')}
                    helperText={errors.name && errors.name.message}
                    error={!!errors.name}
                />
                <TextField
                    label='Email'
                    variant='outlined'
                    fullWidth
                    {...register('email')}
                    helperText={errors.email && errors.email.message}
                    error={!!errors.email}
                />
                <TextField
                    type='password'
                    label='Senha'
                    variant='outlined'
                    fullWidth
                    {...register('password')}
                    helperText={errors.password && errors.password.message}
                    error={!!errors.password}
                />
                <TextField
                    type='password'
                    label='Confirmar Senha'
                    variant='outlined'
                    fullWidth
                    {...register('confirmPwd')}
                    helperText={errors.confirmPwd && errors.confirmPwd.message}
                    error={!!errors.confirmPwd}
                />
                <Button type='submit' variant='defaultGrey'>Cadastrar</Button>
            </form>
        </FormContainer>
    );
};
