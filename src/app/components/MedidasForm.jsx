import React from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";

const MeasureForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid place-items-center ">
      <div className="w-96 p-5 border border-gray-300 rounded-md bg-white">
        <h1 className="text-2xl font-semibold mb-4 text-black text-center">Tus Datos</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            fullWidth
            {...register("nombre")}
            label="Nombre"
            variant="outlined"
            error={errors.nombre ? true : false}
            helperText={errors.nombre ? "Campo requerido" : ""}
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">Género</FormLabel>
            <RadioGroup
            className="text-black"
              aria-label="genero"
              {...register("genero")}
              row
              defaultValue="male"
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Hombre"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Mujer"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            type="number"
            {...register("edad")}
            label="Edad"
            variant="outlined"
            InputProps={{ inputProps: { min: 0 } }}
            error={errors.edad ? true : false}
            helperText={errors.edad ? "Campo requerido" : ""}
          />

          <TextField
            fullWidth
            type="number"
            {...register("altura")}
            label="Altura (cm)"
            variant="outlined"
            InputProps={{ inputProps: { min: 0 } }}
            error={errors.altura ? true : false}
            helperText={errors.altura ? "Campo requerido" : ""}
          />

          <TextField
            fullWidth
            type="number"
            {...register("peso")}
            label="Peso (kg)"
            variant="outlined"
            InputProps={{ inputProps: { min: 0 } }}
            error={errors.peso ? true : false}
            helperText={errors.peso ? "Campo requerido" : ""}
          />

          {/* Resto de los campos aquí */}
          <div className="text-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="text-black hover:text-white border-2"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeasureForm;
