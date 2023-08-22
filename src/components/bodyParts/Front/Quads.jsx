import React from "react";

const Quads = ({ isHighlighted }) => {
  return (
    <g id="quads" className="body-map__muscle" style={{ stroke: "black" }}>
      <g className="body-map__muscle" id="quads">
        <path
          d="M458.96 792.3L458.82 793.02L458.79 793.01C455.7 808.78 452.78 823.66 445.26 827.39C442.18 828.92 438.37 828.54 433.62 826.22C431.52 825.19 429.7 825.03 428.21 825.74C425.2 827.18 424.21 831.51 422.96 837L422.956 837.018C420.807 846.414 418.372 857.06 405.71 857.28H405.44C382.64 857.28 375.34 806.56 375.27 806.05C375.26 805.98 375.25 805.92 375.23 805.87C375.2 805.81 375.2 805.76 375.2 805.7C374.55 800.89 373.79 796.12 372.95 791.53V791.38L372.91 791.22C372.88 791.05 372.85 790.88 372.8 790.71C372.43 788.68 372.02 786.51 371.48 783.85L371.42 783.55C371.35 783.23 371.28 782.88 371.22 782.54C365.63 751.25 368.5 747.76 374.79 740.12L374.795 740.114C381.265 732.274 391.032 720.439 399.45 674.95C401.737 662.572 403.351 647.89 405.06 632.351L405.09 632.08L405.118 631.827C409.996 587.785 415.522 537.892 437.54 522.52C437.67 522.43 437.83 522.42 437.97 522.48C438.11 522.54 438.21 522.67 438.23 522.82C441.22 545.99 444.31 565.51 446.09 572.56L446.19 572.92C446.314 573.364 446.463 573.935 446.634 574.597L446.7 574.85C455.6 608.45 474.81 695.9 461.05 782.05V782.07C460.31 785.48 459.62 788.95 458.96 792.3Z"
          fill={isHighlighted ? "red" : "transparent"}
        ></path>
        <path
          d="M267.5 632.08C269.12 646.92 270.81 662.26 273.14 674.95H273.13C281.55 720.45 291.32 732.28 297.79 740.11L297.797 740.118C304.082 747.742 306.958 751.231 301.36 782.54C301.31 782.87 301.24 783.2 301.17 783.53C301.16 783.64 301.14 783.72 301.12 783.79C300.72 785.77 300.33 787.75 299.99 789.7L299.83 790.45C299.77 790.74 299.71 791.04 299.65 791.34C299.64 791.42 299.62 791.52 299.62 791.61C298.77 796.32 298.02 801.04 297.38 805.7C297.38 805.737 297.376 805.774 297.368 805.809C297.364 805.831 297.358 805.851 297.35 805.87C297.343 805.9 297.335 805.94 297.324 805.996C297.32 806.015 297.315 806.037 297.31 806.06C297.3 806.18 295.46 819.01 290.79 831.76C284.68 848.46 276.5 857.28 267.14 857.28H266.89C254.226 857.06 251.792 846.43 249.643 837.044L249.64 837.03L249.6 836.85C248.35 831.44 247.36 827.16 244.37 825.74C242.85 825.03 241.03 825.19 238.96 826.22C234.2 828.54 230.39 828.92 227.31 827.39C219.791 823.661 216.871 808.785 213.782 793.048L213.78 793.04L213.71 792.69L213.601 792.139C212.925 788.731 212.229 785.223 211.48 781.76C197.85 695.79 217.02 608.42 225.89 574.84C226.06 574.22 226.2 573.68 226.32 573.23L226.5 572.55C228.28 565.52 231.37 546.01 234.36 522.84C234.38 522.69 234.48 522.56 234.62 522.5C234.76 522.44 234.93 522.45 235.05 522.54C257.069 537.892 262.594 587.78 267.473 631.824L267.48 631.89L267.5 632.08Z"
          fill={isHighlighted ? "red" : "transparent"}
        ></path>
      </g>
    </g>
  );
};

export default Quads;
