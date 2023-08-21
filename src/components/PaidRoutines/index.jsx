 
import React from "react";
import Routine from "../Routine";

const PaidRoutines = ({ routines, onSelect }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <h2>Rutinas de Pago</h2>
    {routines.map((routine) => (
      <Routine
        key={routine.id}
        title={routine.title}
        description={routine.description}
        price={routine.price}
        onClick={() => onSelect(routine)}
      />
    ))}
  </div>
);

export default PaidRoutines;
