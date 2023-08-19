'use client'
import React from "react";

const MedidasList = ({ medidas, updateMedida, deleteMedida }) => {
  return (
    <div>
      {medidas.map((medida, index) => (
        <div
          key={index}
          className="border rounded p-2 mb-2 flex justify-between items-center"
        >
          {/* Mostrar los detalles de la medida */}
          <button
            onClick={() => updateMedida(index, updatedMedida)}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
          >
            Editar
          </button>
          <button
            onClick={() => deleteMedida(index)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default MedidasList;
