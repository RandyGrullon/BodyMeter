 
import React from "react";
import Routine from "../Routine";

const FreeRoutines = ({ routines, onSelect }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <h2>Rutinas Gratuitas</h2>
    {routines.map((routine) => (
      <Routine
        key={routine.id}
        title={routine.title}
        description={routine.description}
        onClick={() => onSelect(routine)}
      />
    ))}
  </div>
);

export default FreeRoutines;
