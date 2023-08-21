import React from "react";

const Traps = () => {
  return (
    <g
      id="traps"
      className="body-map__muscle"
      style={{ stroke: "black" }}
      onMouseOver={(e) => {
        e.currentTarget.style.fill = "red";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.fill = "none";
      }}
    >
      <g className="body-map__muscle" id="traps">
        <path
          d="M420.952 210.328C405.051 212.672 395.736 222.047 390.569 227.728C390.186 228.129 389.855 228.495 389.524 228.861L389.036 229.401C389.036 229.401 388.984 229.471 388.966 229.488C382.362 236.79 377.317 235.884 365.153 233.679C356.274 232.059 344.102 229.872 325.595 229.872C307.088 229.872 294.916 232.059 286.037 233.679C273.873 235.884 268.846 236.79 262.241 229.488C262.224 229.471 262.189 229.436 262.172 229.401L261.666 228.861C261.353 228.513 261.021 228.147 260.673 227.763L260.638 227.728L260.534 227.624C255.358 221.925 246.07 212.637 230.255 210.328L230.412 210.224C233.575 208.263 237.905 205.579 240.946 204.177C242.889 203.288 247.446 201.397 252.247 199.358C257.188 197.293 262.555 195.045 266.502 193.329C266.519 193.329 266.519 193.311 266.537 193.311C266.572 193.311 266.589 193.311 266.624 193.294C285.88 188.031 306.426 189.068 317.466 189.608C318.651 189.678 319.705 189.73 320.663 189.765C323.931 189.904 327.268 189.904 330.553 189.765C331.494 189.73 332.566 189.678 333.751 189.608C344.773 189.068 365.319 188.022 384.592 193.294H384.662C388.609 195.01 393.994 197.293 398.951 199.358C403.77 201.388 408.301 203.288 410.27 204.177C413.311 205.588 417.641 208.263 420.787 210.224C420.839 210.258 420.909 210.293 420.961 210.328H420.952Z"
          data-darkreader-inline-fill=""
          fill="currentColor"
          
        ></path>
      </g>
    </g>
  );
};

export default Traps;