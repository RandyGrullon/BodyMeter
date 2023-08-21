import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import FreeRoutines from "@/app/components/FreeRoutines";
import PaidRoutines from "@/app/components/PaidRoutines";
import { loadRoutines } from "@/app/utils/dataLoader";

const RoutinesPage = () => {
  const [freeRoutines, setFreeRoutines] = useState([]);
  const [paidRoutines, setPaidRoutines] = useState([]);

  useEffect(() => {
    loadRoutines().then((data) => {
      setFreeRoutines(data.free);
      setPaidRoutines(data.paid);
    });
  }, []);

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
