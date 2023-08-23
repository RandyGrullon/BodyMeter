import BodyMapBack from "./BodyMapBack";
import BodyMapFront from "./BodyMapFront";

export const MapBody = ({
  handleMuscleClick,
  handlePartHover,
  handlePartLeave,
  hoveredPart,
}) => {
  return (
    <BodyMapBack
      handleMuscleClick={handleMuscleClick}
      handlePartHover={handlePartHover}
      handlePartLeave={handlePartLeave}
      hoveredPart={hoveredPart}
    />
  );
};

export const MapFront = ({
  handleMuscleClick,
  handlePartHover,
  handlePartLeave,
  hoveredPart,
}) => {
  return (
    <BodyMapFront
      handleMuscleClick={handleMuscleClick}
      handlePartHover={handlePartHover}
      handlePartLeave={handlePartLeave}
      hoveredPart={hoveredPart}
    />
  );
};
