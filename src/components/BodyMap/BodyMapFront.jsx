import React from "react";
import Abdominals from "../bodyParts/Front/Abdominals";
import Obliques from "../bodyParts/Front/Obliques";
import Forearms from "../bodyParts/Front/Forearms";
import Biceps from "../bodyParts/Front/Biceps";
import Shoulders from "../bodyParts/Front/Shoulders";
import Traps from "../bodyParts/Front/Traps";
import Chest from "../bodyParts/Front/Chest";
import Quads from "../bodyParts/Front/Quads";
import Calves from "../bodyParts/Front/Calves";
import Body from "../bodyParts/Front/Body";

const BodyMapFront = ({
  handleMuscleClick,
  handlePartHover,
  handlePartLeave,
  hoveredPart,
  activeMuscle,
}) => {
  return (
    <div className="w-3/5 h-3/5 ">
      <svg
        height="100%"
        viewBox="0 0 673 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          onClick={() => handleMuscleClick("abdominals")}
          onMouseEnter={() => handlePartHover("abdominals")}
          onMouseLeave={handlePartLeave}
        >
          <Abdominals
            isHighlighted={hoveredPart === "abdominals"}
            isActive={activeMuscle === "abdominals"}
          />
        </g>
        <g
          onClick={() => handleMuscleClick("obliques")}
          onMouseEnter={() => handlePartHover("obliques")}
          onMouseLeave={handlePartLeave}
        >
          <Obliques
            isHighlighted={hoveredPart === "obliques"}
            isActive={activeMuscle === "obliques"}
          />
        </g>
        <g
          onClick={() => handleMuscleClick("forearms")}
          onMouseEnter={() => handlePartHover("forearms")}
          onMouseLeave={handlePartLeave}
        >
          <Forearms
            isHighlighted={hoveredPart === "forearms"}
            isActive={activeMuscle === "forearms"}
          />
        </g>
        <g
          onClick={() => handleMuscleClick("biceps")}
          onMouseEnter={() => handlePartHover("biceps")}
          onMouseLeave={handlePartLeave}
        >
          <Biceps
            isHighlighted={hoveredPart === "biceps"}
            isActive={activeMuscle === "biceps"}
          />
        </g>
        <g
          onClick={() => handleMuscleClick("shoulders")}
          onMouseEnter={() => handlePartHover("shoulders")}
          onMouseLeave={handlePartLeave}
        >
          <Shoulders
            isHighlighted={hoveredPart === "shoulders"}
            isActive={activeMuscle === "shoulders"}
          />
        </g>
        <g
          onClick={() => handleMuscleClick("traps")}
          onMouseEnter={() => handlePartHover("traps")}
          onMouseLeave={handlePartLeave}
        >
          <Traps
            isHighlighted={hoveredPart === "traps"}
            isActive={activeMuscle === "traps"}
          />
        </g>
        <g
          onClick={() => handleMuscleClick("chest")}
          onMouseEnter={() => handlePartHover("chest")}
          onMouseLeave={handlePartLeave}
        >
          <Chest
            isHighlighted={hoveredPart === "chest"}
            isActive={activeMuscle === "chest"}
          />
        </g>
        <g
          onClick={() => handleMuscleClick("quads")}
          onMouseEnter={() => handlePartHover("quads")}
          onMouseLeave={handlePartLeave}
        >
          <Quads
            isHighlighted={hoveredPart === "quads"}
            isActive={activeMuscle === "quads"}
          />
        </g>
        <g
          onClick={() => handleMuscleClick("calves")}
          onMouseEnter={() => handlePartHover("calves")}
          onMouseLeave={handlePartLeave}
        >
          <Calves
            isHighlighted={hoveredPart === "calves"}
            isActive={activeMuscle === "calves"}
          />
        </g>

        <Body />
      </svg>
      <h1 className="text-center text-2xl text-black font-bold uppercase ">
        {hoveredPart}
      </h1>
    </div>
  );
};

export default BodyMapFront;
