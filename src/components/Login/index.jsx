import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Container } from "@mui/material";
import { LoginIllustrator } from "../../../resources/components/login_illustrator";
// import { loginActionThunk } from "@/app/store/actions/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // try {
    //   await loginActionThunk(data.email, data.password);
    //   // Redirect o manejar el inicio de sesión exitoso
    // } catch (error) {
    //   console.error(error.message);
    // }
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Container className="max-w-4xl mx-auto items-center bg-white p-10 grid grid-cols-2 gap-3 m-10 shadow-lg rounded-lg">
        <div className="col-span-2 ">
          <h1 className="text-black text-center text-4xl font-avenir-next font-bold">
            Login
          </h1>
        </div>
        <div className="flex justify-center col-start-1">
          <LoginIllustrator />
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full text-black hover:text-white"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
