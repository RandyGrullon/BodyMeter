import React from "react";
import { Button } from "@mui/material";

const MedidasList = ({ medidas, updateMedida, deleteMedida }) => {
  return (
    <table className="w-full border-collapse text-black">
      <thead>
        <tr>
          <th className="border p-2 bg-gray-100 text-left">Músculo</th>
          <th className="border p-2 bg-gray-100 text-left">Medida</th>
          <th className="border p-2 bg-gray-100 text-center w-32">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {medidas.map((medida, index) => (
          <tr key={index} className="border">
            <td className="border p-2">{medida.musculo}</td>
            <td className="border p-2">{medida.medida}</td>
            <td className="border p-2 flex justify-center space-x-2 w-40">
              <Button
                onClick={() => updateMedida(index, updateMedida)}
                variant="contained"
                className="text-black hover:text-white"
                color="success"
                size="small"
              >
                Editar
              </Button>
              <Button
                onClick={() => deleteMedida(index)}
                variant="contained"
                className="text-black hover:text-white"
                color="error"
                size="small"
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedidasList;
