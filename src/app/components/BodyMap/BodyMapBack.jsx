import React from "react";
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
  return (
    <div className="w-3/5">
      <svg
        height="100%"
        viewBox="0 0 673 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Body />
        <Calves />
        <Forearms />
        <Glutes />
        <Hamstrings />
        <Lats />
        <Lowerback />
        <Shoulders />
        <Traps />
        <TrapsMiddle />
        <Triceps />
      </svg>
    </div>
  );
};

export default BodyMap;
