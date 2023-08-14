"use client";
import React, { useState, useEffect } from "react";
import MedidasForm from "./MedidasForm";
import MedidasList from "./MedidasList";
import BodyMapFront from "./BodyMapFront";
import BodyMapBack from "./BodyMapBack";


const MedidasCorporalesCRUD = () => {
  const [medidas, setMedidas] = useState([]);

  useEffect(() => {
    // Obtener medidas desde el local storage al cargar
    const savedMedidas = JSON.parse(localStorage.getItem("medidas") || "[]");
    setMedidas(savedMedidas);
  }, []);

  useEffect(() => {
    // Guardar medidas en el local storage cuando cambian
    localStorage.setItem("medidas", JSON.stringify(medidas));
  }, [medidas]);

  const addMedida = (medida) => {
    setMedidas([...medidas, medida]);
  };

  const updateMedida = (index, updatedMedida) => {
    const updatedMedidas = [...medidas];
    updatedMedidas[index] = updatedMedida;
    setMedidas(updatedMedidas);
  };

  const deleteMedida = (index) => {
    const updatedMedidas = medidas.filter((_, i) => i !== index);
    setMedidas(updatedMedidas);
  };

  return (
    <div className="mx-auto max-w-2xl p-4 bg-white ">
      <div>
        <h1 className="text-2xl font-semibold text-center m-4 text-black">
          Medidas Corporales CRUD
        </h1>
        <MedidasForm addMedida={addMedida} />
        <MedidasList
          medidas={medidas}
          updateMedida={updateMedida}
          deleteMedida={deleteMedida}
        />
      </div>
      <div className="flex">
        <BodyMapFront />
        <BodyMapBack />
      </div>
    </div>
  );
};

export default MedidasCorporalesCRUD;
