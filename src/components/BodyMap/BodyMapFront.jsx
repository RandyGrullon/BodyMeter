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

const BodyMapFront = () => {
  return (
    <div className="w-3/5" style={{ display: "block" }}>
      <svg
        height="100%"
        viewBox="0 0 673 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Body />
        <Abdominals  />
        <Obliques />
        <Forearms />
        <Biceps />
        <Shoulders />
        <Traps />
        <Chest />
        <Quads />
        <Calves />
        {/* You can continue with other SVG content if needed */}
      </svg>
    </div>
  );
};

export default BodyMapFront;
