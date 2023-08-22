import React, { useState, useEffect } from "react";
import FrontBody from "../BodyMap/BodyMapFront";
import Modal from "../Modal";

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
    <div className="py-8 px-4 bg-white h-screen text-black">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Medidas Globales
      </h1>
      <div className="mb-6 w-full flex justify-center gap-2 ">
        <div className="w-96">
          <FrontBody />
        </div>
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Usuario</th>
                <th className="border px-4 py-2">Medida</th>
                <th className="border px-4 py-2">Parte del Cuerpo</th>
              </tr>
            </thead>
            <tbody>
              {measurements.map((measurement, index) => (
                <tr key={index} className="border">
                  <td className="border px-4 py-2">{measurement.user}</td>
                  <td className="border px-4 py-2">{measurement.value}</td>
                  <td className="border px-4 py-2">{measurement.bodyPart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <Modal onClose={closeModal}>
          <h2 className="text-2xl font-semibold mb-4">
            Mejores Medidas para {selectedBodyPart}
          </h2>
          {/* Aquí puedes mostrar las mejores medidas para la parte del cuerpo seleccionada */}
        </Modal>
      )}
    </div>
  );
};

export default GlobalMeasurements;
