// pages/signup.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signupActionThunk } from '@/app/store/actions/authActions';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(signupActionThunk(data.email, data.password));
      // Redirect o manejar el registro exitoso
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container className="max-w-sm mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextField
          {...register('email', { required: true })}
          label="Email"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors.email && 'Email is required'}
        />
        <TextField
          {...register('password', { required: true })}
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          error={!!errors.password}
          helperText={errors.password && 'Password is required'}
        />
        <TextField
          {...register('confirmPassword', {
            required: true,
            validate: (value) => value === password || 'Passwords do not match',
          })}
          type="password"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword && errors.confirmPassword.message}
        />
        <Button type="submit" variant="contained" color="primary" className="w-full">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
