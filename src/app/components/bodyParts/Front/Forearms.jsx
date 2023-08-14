import React from "react";

const Forearms = () => {
  return (
    <g
      id="forearms"
      style={{ stroke: "black" }}
      onMouseOver={(e) => {
        e.currentTarget.style.fill = "red";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.fill = "none";
      }}
    >
      <g class="body-map__muscle" id="forearms">
        <path
          d="M135.05 418.55C141.32 418.55 148.19 416.1 154.92 411.47V411.46C155.1 411.34 155.33 411.37 155.48 411.52C155.63 411.67 155.65 411.91 155.52 412.08C151.51 417.52 146.59 424.21 144.16 427.73C139.457 435.289 136.843 440.787 134.543 445.625L134.46 445.8L134.457 445.806C130.428 454.264 126.627 462.244 113.47 478.7C101.33 493.83 93.04 500.16 84.26 506.86L84.199 506.906C77.9179 511.692 71.4135 516.648 63.23 525.21C63.21 525.23 63.19 525.25 63.16 525.27C61.56 527.38 58.6 531.44 56.45 535.48C56.4 535.57 56.33 535.64 56.23 535.68C53.2 536.91 50.19 537.52 47.41 537.52C44.92 537.52 42.61 537.03 40.63 536.04C35.84 533.67 32.13 527.92 30.95 521.04C30.94 520.95 30.95 520.86 30.99 520.78C31.81 519.04 32.73 517.24 33.72 515.43C37.33 507.63 41.56 497.2 46.32 485.38L46.43 485.1C57.43 457.87 71.12 423.99 84.49 407.9C92.4 398.38 98.13 392.38 102.32 388L102.5 387.81C108.4 381.64 111.64 378.25 114.13 372.23C114.229 371.995 114.327 371.761 114.425 371.528C114.593 371.127 114.759 370.728 114.93 370.33L115.04 370.08C115.13 369.87 115.36 369.77 115.58 369.84C115.8 369.91 115.92 370.14 115.87 370.36C108.45 400.78 117.14 412.23 125.73 416.48C128.51 417.85 131.64 418.55 135.05 418.55Z"
          fill="currentColor"
        ></path>
        <path
          d="M638.96 515.58C640.01 517.47 640.88 519.19 641.61 520.78C641.64 520.86 641.65 520.94 641.64 521.03C640.5 527.9 636.8 533.65 631.99 536.05C630.02 537.04 627.7 537.53 625.21 537.53C622.42 537.53 619.4 536.92 616.38 535.7C616.29 535.66 616.21 535.59 616.16 535.5C614.01 531.46 611.05 527.39 609.47 525.33C609.46 525.32 609.443 525.298 609.425 525.275C609.407 525.252 609.39 525.23 609.38 525.22C601.16 516.63 594.65 511.67 588.351 506.871L588.291 506.825C579.533 500.132 571.243 493.796 559.15 478.7C545.92 462.19 542.15 454.23 538.16 445.8L538.02 445.5L538.012 445.484C535.585 440.399 533.075 435.142 528.39 427.63C526.32 424.65 522.31 419.13 517.12 412.09C517 411.92 517.01 411.68 517.16 411.53C517.31 411.37 517.55 411.35 517.72 411.47C524.43 416.1 531.29 418.55 537.57 418.55C540.97 418.55 544.11 417.85 546.89 416.48C555.48 412.24 564.16 400.82 556.8 370.45C556.74 370.23 556.87 370 557.09 369.93C557.31 369.85 557.55 369.97 557.63 370.18L557.633 370.188C557.792 370.575 557.951 370.963 558.12 371.35C558.25 371.64 558.37 371.93 558.49 372.22C561.01 378.3 564.24 381.68 570.12 387.82L570.48 388.2L570.625 388.352C574.773 392.699 580.44 398.639 588.14 407.91C601.55 424.05 615.27 458.06 626.29 485.38L626.52 485.95C631.01 497.07 635.25 507.57 638.96 515.58Z"
          fill="currentColor"
        ></path>
      </g>
    </g>
  );
};

export default Forearms;
