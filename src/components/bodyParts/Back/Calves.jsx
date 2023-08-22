import React from "react";

const Calves = ({isHighlighted}) => {
  return (
    <g
      id="calves"
      className="body-map__muscle"
      style={{ stroke: "black" }}
     
    >
      <g className="body-map__muscle" id="calves">
        <path
          d="M450.943 1016.66C463.752 1015.89 466.915 989.158 468.309 963.036L468.317 963.027C467.899 937.576 462.619 919.766 457.835 904.884C457.801 904.788 457.77 904.696 457.74 904.605C457.709 904.513 457.679 904.422 457.644 904.326C457.563 904.067 457.48 903.807 457.396 903.547C457.262 903.133 457.127 902.72 456.999 902.313C456.197 900.17 455.073 898.192 453.505 897.774C450.203 896.868 444.461 902.427 439.424 907.35L439.406 907.367C431.691 914.874 422.959 923.369 415.437 917.779C410.314 913.972 404.371 913.057 399.535 915.348C394.081 917.936 390.744 924.314 390.36 932.836C390.308 933.672 389.698 934.352 388.896 934.474C384.583 975.931 384.88 989.21 387.799 998.786C387.816 998.821 387.816 998.838 387.816 998.873C396.814 1022.4 406.325 1020.43 409.465 1019.79L409.477 1019.78C417.458 1018.11 418.565 1007.21 419.454 998.455C420.159 991.38 420.735 985.803 424.908 985.455C428.187 985.161 430.435 989.771 433.835 996.744L433.909 996.895C437.961 1005.25 443.502 1016.66 450.56 1016.66H450.943Z"
          data-darkreader-inline-fill=""
          fill={isHighlighted ? "red" : "transparent"} 
          
        ></path>
        <path
          d="M263.496 998.655C263.496 998.62 263.531 998.568 263.531 998.568L263.54 998.577C266.354 989.001 266.633 975.618 262.337 934.491C261.536 934.387 260.908 933.707 260.873 932.853C260.49 924.332 257.135 917.954 251.681 915.366C246.854 913.065 240.903 913.989 235.797 917.797C228.286 923.378 219.569 914.916 211.844 907.418L211.792 907.367L211.729 907.306C206.7 902.407 201.017 896.871 197.711 897.791C196.248 898.192 195.158 899.97 194.357 901.965L194.305 902.122C194.043 902.941 193.764 903.768 193.485 904.622C188.667 919.557 183.317 937.445 182.899 963.027V963.149C184.31 989.236 187.491 1015.9 200.264 1016.67C207.514 1017.08 213.177 1005.43 217.316 996.904L217.404 996.722C220.779 989.766 223.026 985.135 226.317 985.464C230.463 985.81 231.034 991.337 231.761 998.366L231.771 998.464L231.777 998.517C232.665 1007.27 233.765 1018.13 241.73 1019.79L241.746 1019.8C244.907 1020.44 254.423 1022.4 263.409 998.812C263.416 998.798 263.42 998.786 263.425 998.776C263.432 998.76 263.441 998.746 263.461 998.725C263.461 998.708 263.479 998.69 263.479 998.69L263.496 998.655Z"
          data-darkreader-inline-fill=""
          fill={isHighlighted ? "red" : "transparent"} 
          
        ></path>
      </g>
    </g>
  );
};

export default Calves;
