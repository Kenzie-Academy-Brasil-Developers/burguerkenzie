import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required('Campo obrigatório!').email('Email inválido.'),
    password: yup
    .string()
    .required('Campo obrigatório!')
})

