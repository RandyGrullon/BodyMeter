import React from "react";
import { TextField, Button } from "@mui/material";

const MeasureForm = ({
  selectedMuscle,
  addMeasure,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <div className="grid place-items-center ">
      <div className="w-96 p-5 border border-gray-300 rounded-md bg-white">
        {!selectedMuscle ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-black mb-4">
              Selecciona un músculo
            </p>
            <p className="text-gray-600">Luego coloca tu medida</p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-black text-center">
              Medidas Corporales
            </h1>
            <form onSubmit={handleSubmit(addMeasure)} className="space-y-4">
              <TextField
                fullWidth
                {...register("medida")}
                label={`Inserta la medida (${selectedMuscle})`}
                variant="outlined"
                error={errors.medida ? true : false}
                helperText={errors.medida ? "Campo requerido" : ""}
              />

              {/* Resto de los campos aquí */}
              <div className="text-center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="text-black hover:text-white border-2"
                >
                  Agregar Medida
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeasureForm;
