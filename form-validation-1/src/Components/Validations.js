import * as yup from 'yup';

const valitadions = yup.object().shape({
    email: yup
        .string()
        .email('Email not valid!')
        .required('Required!'),
    password: yup
        .string()
        .min(5, 'Password must be longer than 5 characters!')
        .required('Required!'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], 'Please check the entered password!')
        .required('Required!'),
});

export default valitadions;