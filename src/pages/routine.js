
import React from "react";
import Navbar from "@/app/components/Navbar";
import FreeRoutines from "@/app/components/FreeRoutines";
import PaidRoutines from "@/app/components/PaidRoutines";

const RoutinesPage = () => {
  const freeRoutines = [
    { id: 1, title: "Rutina 1", description: "Descripción de la rutina 1" },
    // ...
  ];
  const paidRoutines = [
    { id: 2, title: "Rutina 2", description: "Descripción de la rutina 2", price: 9.99 },
    // ...
  ];

  const handleRoutineSelected = (routine) => {
    // Manejar la selección de una rutina
  };

  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <FreeRoutines routines={freeRoutines} onSelect={handleRoutineSelected} />
        <PaidRoutines routines={paidRoutines} onSelect={handleRoutineSelected} />
      </div>
    </div>
  );
};

export default RoutinesPage;
