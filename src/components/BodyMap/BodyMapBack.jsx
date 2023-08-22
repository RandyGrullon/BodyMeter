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

const BodyMap = () => {
  const [hoveredPart, setHoveredPart] = useState(null);

  const handlePartHover = (part) => {
    setHoveredPart(part);
  };

  const handlePartLeave = () => {
    setHoveredPart(null);
  };

  return (
    <div className="w-3/5 h-3/5">
      <svg
        height="100%"
        viewBox="0 0 673 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          onMouseEnter={() => handlePartHover("body")}
          onMouseLeave={handlePartLeave}
        >
          <Body isHighlighted={hoveredPart === "body"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("calves")}
          onMouseLeave={handlePartLeave}
        >
          <Calves isHighlighted={hoveredPart === "calves"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("forearms")}
          onMouseLeave={handlePartLeave}
        >
          <Forearms isHighlighted={hoveredPart === "forearms"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("glutes")}
          onMouseLeave={handlePartLeave}
        >
          <Glutes isHighlighted={hoveredPart === "glutes"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("hamstrings")}
          onMouseLeave={handlePartLeave}
        >
          <Hamstrings isHighlighted={hoveredPart === "hamstrings"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("lats")}
          onMouseLeave={handlePartLeave}
        >
          <Lats isHighlighted={hoveredPart === "lats"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("lowerback")}
          onMouseLeave={handlePartLeave}
        >
          <Lowerback isHighlighted={hoveredPart === "lowerback"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("shoulders")}
          onMouseLeave={handlePartLeave}
        >
          <Shoulders isHighlighted={hoveredPart === "shoulders"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("traps")}
          onMouseLeave={handlePartLeave}
        >
          <Traps isHighlighted={hoveredPart === "traps"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("traps-middle")}
          onMouseLeave={handlePartLeave}
        >
          <TrapsMiddle isHighlighted={hoveredPart === "traps-middle"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("triceps")}
          onMouseLeave={handlePartLeave}
        >
          <Triceps isHighlighted={hoveredPart === "triceps"} />
        </g>
      </svg>
      <h1 className="text-center text-3xl text-black font-bold uppercase">{hoveredPart}</h1>
    </div>
  );
};

export default BodyMap;
