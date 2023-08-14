import React from "react";

const Calves = () => {
  return (
    <g
      id="calves"
      style={{ stroke: "black" }}
      onMouseOver={(e) => {
        e.currentTarget.style.fill = "red";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.fill = "none";
      }}
    >
      <g class="body-map__muscle" id="calves">
        <path
          d="M213.13 880.79C213.65 879.35 214.06 878.18 214.36 877.22C219.58 878.81 222.24 881.96 226.36 889.29C225.671 901.305 223.421 919.666 221.458 935.675C220.998 939.426 220.554 943.049 220.15 946.43C218.66 958.9 213.28 974.49 201.61 983.81C201.488 983.915 201.362 984.013 201.237 984.104C201.147 984.169 201.058 984.231 200.97 984.29C196.03 928.87 208.12 894.82 213.13 880.79Z"
          fill="currentColor"
        ></path>
        <path
          d="M446.26 889.29C450.38 881.96 453.04 878.82 458.26 877.22C458.57 878.18 458.97 879.35 459.49 880.79C464.49 894.82 476.59 928.87 471.65 984.29C471.44 984.15 471.22 983.99 471.01 983.81C459.34 974.48 453.96 958.9 452.47 946.43C452.066 943.049 451.622 939.427 451.162 935.676C449.199 919.667 446.949 901.305 446.26 889.29Z"
          fill="currentColor"
        ></path>
        <path
          d="M419.322 902.906C418.618 902.747 417.894 902.558 417.19 902.32V902.3C412.25 900.74 407.39 897.7 402.91 893.4C403.53 898.32 402.73 906.81 400.35 927.92C394.241 972.272 398.539 978.278 402.688 984.077L402.69 984.08L402.759 984.178C404.278 986.317 405.847 988.527 406.95 992.28C406.99 992.4 407.02 992.53 407.07 992.65L407.819 992.047C418.013 983.845 426.766 976.803 425.38 954.81C424.524 941.224 422.33 925.11 420.55 912.034L420.546 912.01C420.104 908.758 419.687 905.695 419.322 902.906Z"
          fill="currentColor"
        ></path>
        <path
          d="M269.71 893.41C265.24 897.71 260.37 900.74 255.43 902.31V902.33C254.72 902.56 253.99 902.76 253.28 902.92C252.915 905.717 252.496 908.791 252.052 912.054L252.05 912.065C250.27 925.14 248.076 941.255 247.22 954.84C245.834 976.833 254.587 983.875 264.781 992.077C265.03 992.277 265.28 992.478 265.53 992.68C265.54 992.656 265.55 992.631 265.559 992.606C265.573 992.569 265.586 992.531 265.598 992.494C265.618 992.432 265.635 992.37 265.65 992.31C266.758 988.53 268.337 986.317 269.862 984.178L269.91 984.11C274.07 978.3 278.36 972.3 272.25 927.95C269.87 906.84 269.07 898.35 269.69 893.43L269.71 893.41Z"
          fill="currentColor"
        ></path>
      </g>
    </g>
  );
};

export default Calves;
