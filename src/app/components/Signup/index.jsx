"use client";
import React from "react";
import { useForm } from "react-hook-form";
import SignUpIllustrator from "../../resources/images/signup_illustrator.jpg";
import { Button, TextField, Container } from "@mui/material";
import { signUpActionThunk } from "@/app/store/actions/auth"; // Asegúrate de importar la acción correspondiente

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");

  const onSubmit = async ({ data }) => {
    try {
      await signUpActionThunk(data.email, data.password); // Utiliza la acción signUpActionThunk para el registro
      // Redirigir o manejar el registro  exitoso
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Container className="max-w-4xl mx-auto items-center bg-white p-10 grid grid-cols-2 gap-3 m-10 shadow-lg rounded-lg">
        <div className="col-span-2 ">
          <h1 className="text-black text-center text-4xl font-avenir-next font-bold">
            Sign Up
          </h1>
        </div>
        <div className="flex justify-center col-start-1">
          <SignUpIllustrator />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            {...register("email", { required: true })}
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email && "Email is required"}
          />
          <TextField
            {...register("password", { required: true })}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password && "Password is required"}
          />
          <TextField
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword && errors.confirmPassword.message
            }
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full text-black hover:text-white"
          >
            Sign U
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
