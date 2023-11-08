import React from 'react';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form } from './styles';

import FormField from '../FormField';

import auth from '../../services/auth';

import { Button } from '@mui/material';

const FormRegister = (): any => {
  const history = useHistory();
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Invalid username')
      .max(12, "Your username can't have more than 12 characters!"),
    /* email: yup.string().email().required('E-mail inválido'),
    emailConfirmation: yup
      .string()
      .email()
      .oneOf([yup.ref('email'), null], 'Emails must match'), */
    password: yup
      .string()
      .required('Please enter your password.')
      .max(15, "Your password can't have more than 12 characters")
      .oneOf([yup.ref('passwordConfirmation'), null], 'Passwords must match'),
    passwordConfirmation: yup
      .string()
      .required('Please enter your password confirmation')
      .max(15, "Your password can't have more than 12 characters")
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(validationSchema) });

  /**
   * Executed when we hit submit on the register form
   * @param data Registering data
   */
  const onSubmit = async (data: any) => {
    const formattedData = {
      username: data.username,
      password: data.password,
    };
    await auth
      .registerUser(formattedData)
      .then(() => {
        toast.success('User successfully registered');
        history.push('/login');
      })
      .catch(err => {
        const errorList = err.response.data?.errors;

        if (errorList?.length) {
          toast.error(errorList[0].msg);
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="username"
        label="Username"
        register={register}
        error={errors.username?.message}
        setValueFormState={setValue}
        width="100%"
      />

      <FormField
        name="password"
        type="password"
        label="Password"
        register={register}
        error={errors.password?.message}
        setValueFormState={setValue}
        width="100%"
      />
      <FormField
        name="passwordConfirmation"
        type="password"
        label="Confirm Password"
        register={register}
        error={errors.passwordConfirmation?.message}
        setValueFormState={setValue}
        width="100%"
      />

      <Link to="/login">Already registered? click to login</Link>

      <Button variant="outlined" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default FormRegister;
