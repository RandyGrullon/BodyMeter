import React, { useState, useEffect } from "react";
import BodyParts from "../components/BodyMap/BodyMapBack";
import Modal from "@/app/components/Modal";

const GlobalMeasurements = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [measurements, setMeasurements] = useState([]); // Medidas globales

  // Simulando la carga de medidas desde una API
  useEffect(() => {
    // Aquí puedes realizar una petición a la API para obtener las medidas globales
    // setMeasurements(data);
  }, []);

  const openModal = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Medidas Globales</h1>
      <div>
        <BodyParts onClick={openModal} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Medida</th>
            <th>Parte del Cuerpo</th>
          </tr>
        </thead>
        <tbody>
          {measurements.map((measurement, index) => (
            <tr key={index}>
              <td>{measurement.user}</td>
              <td>{measurement.value}</td>
              <td>{measurement.bodyPart}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <h2>Mejores Medidas para {selectedBodyPart}</h2>
          {/* Aquí puedes mostrar las mejores medidas para la parte del cuerpo seleccionada */}
        </Modal>
      )}
    </div>
  );
};

export default GlobalMeasurements;
