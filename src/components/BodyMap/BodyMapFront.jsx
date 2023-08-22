import React, { useState } from "react";
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

const BodyMapFront = () => {
  const [hoveredPart, setHoveredPart] = useState(null);

  const handlePartHover = (part) => {
    setHoveredPart(part);
  };

  const handlePartLeave = () => {
    setHoveredPart(null);
  };

  return (
    <div className="w-3/5 h-3/5 ">
      <svg
        height="100%"
        viewBox="0 0 673 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          onMouseEnter={() => handlePartHover("abdominals")}
          onMouseLeave={handlePartLeave}
        >
          <Abdominals isHighlighted={hoveredPart === "abdominals"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("obliques")}
          onMouseLeave={handlePartLeave}
        >
          <Obliques isHighlighted={hoveredPart === "obliques"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("forearms")}
          onMouseLeave={handlePartLeave}
        >
          <Forearms isHighlighted={hoveredPart === "forearms"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("biceps")}
          onMouseLeave={handlePartLeave}
        >
          <Biceps isHighlighted={hoveredPart === "biceps"} />
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
          onMouseEnter={() => handlePartHover("chest")}
          onMouseLeave={handlePartLeave}
        >
          <Chest isHighlighted={hoveredPart === "chest"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("quads")}
          onMouseLeave={handlePartLeave}
        >
          <Quads isHighlighted={hoveredPart === "quads"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("calves")}
          onMouseLeave={handlePartLeave}
        >
          <Calves isHighlighted={hoveredPart === "calves"} />
        </g>
        <g
          onMouseEnter={() => handlePartHover("body")}
          onMouseLeave={handlePartLeave}
        >
          <Body isHighlighted={hoveredPart === "body"} />
        </g>
      </svg>
        <h1 className="text-center text-3xl text-black font-bold uppercase">{hoveredPart}</h1>
    </div>
  );
};

export default BodyMapFront;
