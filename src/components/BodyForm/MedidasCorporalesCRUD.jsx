import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MedidasForm from "./MedidasForm";
import MedidasList from "./MedidasList";
import { MapBack, MapFront } from "../BodyMap";

const MedidasCorporalesCRUD = () => {
  const [medidas, setMedidas] = useState([]);
  const [isFront, setIsFront] = useState(true);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [muscleActive, setMuscleActive] = useState(false); // Nuevo estado
  const [hoveredPart, setHoveredPart] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    console.log("medida", medida);
    const newMedida = {
      musculo: selectedMuscle,
      medida: medida,
    };
    setMedidas([...medidas, newMedida]);
    setMuscleActive(false);
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

  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
    setMuscleActive(true);
  };

  const handlePartHover = (part) => {
    setHoveredPart(part);
  };

  const handlePartLeave = () => {
    setHoveredPart(null);
  };

  return (
    <div className="container bg-white text-black">
      <div className="mx-auto max-w-2xl p-4 flex">
        <div className="">
          <h1 className="text-2xl font-semibold text-center text-black">
            Medidas Corporales CRUD
          </h1>
          <MedidasForm
            addMeasure={addMedida}
            selectedMuscle={selectedMuscle}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
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
              <MapFront
                handleMuscleClick={handleMuscleClick}
                handlePartHover={handlePartHover}
                handlePartLeave={handlePartLeave}
                hoveredPart={hoveredPart}
                isActive={muscleActive}
              />
            </div>
          ) : (
            <div className="w-[400px] flex justify-center">
              <MapBack
                handleMuscleClick={handleMuscleClick}
                handlePartHover={handlePartHover}
                handlePartLeave={handlePartLeave}
                hoveredPart={hoveredPart}
                isActive={muscleActive}
              />
            </div>
          )}
        </div>
      </div>
      {medidas ? (
        <div>
          <MedidasList
            medidas={medidas}
            updateMedida={updateMedida}
            deleteMedida={deleteMedida}
          />
        </div>
      ) : (
        <div className="text-center text-2xl text-black font-bold uppercase ">
          No hay medidas
        </div>
      )}
    </div>
  );
};

export default MedidasCorporalesCRUD;
