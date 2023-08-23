import React, { useState } from "react";
import Body from "../bodyParts/Back/Body";
import Calves from "../bodyParts/Back/Calves";
import Forearms from "../bodyParts/Back/Forearms";
import Glutes from "../bodyParts/Back/Glutes";
import Hamstrings from "../bodyParts/Back/Hamstrings";
import Lats from "../bodyParts/Back/Lats";
import Lowerback from "../bodyParts/Back/Lowerback";
import Shoulders from "../bodyParts/Back/Shoulders";
import Traps from "../bodyParts/Back/Traps";
import TrapsMiddle from "../bodyParts/Back/Traps-middle";
import Triceps from "../bodyParts/Back/Triceps";

const BodyMap = ({
  handleMuscleClick,
  handlePartHover,
  handlePartLeave,
  hoveredPart,
  activeMuscle,
}) => {
  return (
    <div className="w-3/5 h-3/5">
      <svg
        height="100%"
        viewBox="0 0 673 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Body />

        <g
          onMouseEnter={handlePartHover("calves")}
          onMouseLeave={handlePartLeave}
        >
          <Calves
            isHighlighted={hoveredPart === "calves"}
            isActive={activeMuscle === "calves"}
          />
        </g>
        <g
          onClick={handleMuscleClick("forearms")}
          onMouseEnter={handlePartHover("forearms")}
          onMouseLeave={handlePartLeave}
        >
          <Forearms
            isHighlighted={hoveredPart === "forearms"}
            isActive={activeMuscle === "forearms"}
          />
        </g>
        <g
          onClick={handleMuscleClick("glutes")}
          onMouseEnter={handlePartHover("glutes")}
          onMouseLeave={handlePartLeave}
        >
          <Glutes
            isHighlighted={hoveredPart === "glutes"}
            isActive={activeMuscle === "glutes"}
          />
        </g>
        <g
          onClick={handleMuscleClick("hamstrings")}
          onMouseEnter={handlePartHover("hamstrings")}
          onMouseLeave={handlePartLeave}
        >
          <Hamstrings
            isHighlighted={hoveredPart === "hamstrings"}
            isActive={activeMuscle === "hamstrings"}
          />
        </g>
        <g
          onClick={handleMuscleClick("lats")}
          onMouseEnter={handlePartHover("lats")}
          onMouseLeave={handlePartLeave}
        >
          <Lats
            isHighlighted={hoveredPart === "lats"}
            isActive={activeMuscle === "lats"}
          />
        </g>
        <g
          onClick={handleMuscleClick("lowerback")}
          onMouseEnter={handlePartHover("lowerback")}
          onMouseLeave={handlePartLeave}
        >
          <Lowerback
            isHighlighted={hoveredPart === "lowerback"}
            isActive={activeMuscle === "lowerback"}
          />
        </g>
        <g
          onClick={handleMuscleClick("shoulders")}
          onMouseEnter={handlePartHover("shoulders")}
          onMouseLeave={handlePartLeave}
        >
          <Shoulders
            isHighlighted={hoveredPart === "shoulders"}
            isActive={activeMuscle === "shoulders"}
          />
        </g>
        <g
          onClick={handleMuscleClick("traps")}
          onMouseEnter={handlePartHover("traps")}
          onMouseLeave={handlePartLeave}
        >
          <Traps
            isHighlighted={hoveredPart === "traps"}
            isActive={activeMuscle === "traps"}
          />
        </g>
        <g
          onClick={handleMuscleClick("traps-middle")}
          onMouseEnter={handlePartHover("traps-middle")}
          onMouseLeave={handlePartLeave}
        >
          <TrapsMiddle
            isHighlighted={hoveredPart === "traps-middle"}
            isActive={activeMuscle === "traps-middle"}
          />
        </g>
        <g
          onClick={handleMuscleClick("triceps")}
          onMouseEnter={handlePartHover("triceps")}
          onMouseLeave={handlePartLeave}
        >
          <Triceps
            isHighlighted={hoveredPart === "triceps"}
            isActive={activeMuscle === "triceps"}
          />
        </g>
      </svg>
      <h1 className="text-center text-3xl text-black font-bold uppercase">
        {hoveredPart}
      </h1>
    </div>
  );
};

export default BodyMap;
