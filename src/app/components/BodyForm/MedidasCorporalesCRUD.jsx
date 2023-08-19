"use client";
import React, { useState, useEffect } from "react";
import MedidasForm from "./MedidasForm";
import MedidasList from "./MedidasList";
import BodyMapFront from "../BodyMap/BodyMapFront";
import BodyMapBack from "../BodyMap/BodyMapBack";

const MedidasCorporalesCRUD = () => {
  const [medidas, setMedidas] = useState([]);
  const [isFront, setIsFront] = useState(true);

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
    <div className="container bg-white ">
      <div className="mx-auto max-w-2xl p-4 flex">
        <div className="">
          <h1 className="text-2xl font-semibold text-center text-black">
            Medidas Corporales CRUD
          </h1>
          <MedidasForm addMedida={addMedida} />
          <MedidasList
            medidas={medidas}
            updateMedida={updateMedida}
            deleteMedida={deleteMedida}
          />
        </div>
        <div>
          <div className="flex gap-4 m-4 items-center justify-center">
            <button
              onClick={() => setIsFront(true)}
              className={`px-4 py-2 text-black duration-300${
                isFront ? "border-b-2 border-red-400" : ""
              }`}
            >
              Front
            </button>
            <hr className="mx-2 h-7 border-r border-gray-300" />
            <button
              onClick={() => setIsFront(false)}
              className={`px-4 py-2 text-black bg-white duration-300${
                !isFront ? "border-b-2 border-red-400" : ""
              }`}
            >
              Back
            </button>
          </div>

          {isFront ? (
            <div className="w-[400px] flex justify-center">
              <BodyMapFront />
            </div>
          ) : (
            <div className="w-[400px] flex justify-center">
              <BodyMapBack />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedidasCorporalesCRUD;
