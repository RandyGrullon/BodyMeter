import React from "react";

const Forearms = () => {
  return (
    <g
      id="forearms"
      className="body-map__muscle"
      style={{ stroke: "black" }}
      onMouseOver={(e) => {
        e.currentTarget.style.fill = "red";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.fill = "none";
      }}
    >
      <g className="body-map__muscle" id="forearms">
        <path
          d="M622.044 548.592C626.462 546.884 630.339 541.622 632.265 534.755L632.256 534.738C631.786 534.041 631.333 533.283 630.914 532.29C630.183 530.547 628.649 525.79 626.34 518.575L626.117 517.882C621.416 503.25 613.707 479.261 604.47 455.187C590.285 418.199 564.772 392.617 557.297 385.664C556.451 384.871 555.685 384.087 555.022 383.285C554.944 385.498 554.369 387.11 553.306 388.208C550.657 390.97 546.074 389.62 541.656 388.313C538.04 387.232 533.954 386.03 531.802 387.354C529.998 388.476 529.707 393.512 529.448 398.001L529.44 398.132L529.437 398.188C529.037 405.001 528.625 412.027 523.637 414.069C522.801 414.417 521.869 414.592 520.858 414.592C517.573 414.592 513.312 412.753 507.823 408.911C510.855 412.98 514.611 418.138 519.664 425.091L520.1 425.666C526.426 434.379 531.767 443.676 537.413 453.531L537.46 453.613C546.385 469.167 555.621 485.263 569.242 499.145C591.261 521.755 601.15 536.289 605.376 545.394C611.458 549.097 617.662 550.282 622.044 548.592Z"
          data-darkreader-inline-fill=""
          fill="currentColor"
          
        ></path>
        <path
          d="M131.543 425.091C136.582 418.159 140.33 413.01 143.332 408.947C137.873 412.777 133.638 414.609 130.341 414.609C129.339 414.609 128.415 414.435 127.579 414.086C122.577 412.039 122.159 404.981 121.776 398.15C121.514 393.628 121.218 388.504 119.397 387.372C117.262 386.056 113.176 387.25 109.56 388.33L109.55 388.333C105.118 389.639 100.549 390.986 97.8929 388.226C96.856 387.128 96.2635 385.524 96.1764 383.337C95.5054 384.113 94.7561 384.897 93.9196 385.681C86.4263 392.634 60.914 418.216 46.7289 455.204C37.4945 479.294 29.7732 503.308 25.072 517.929L24.8588 518.593C22.5585 525.807 21.0337 530.573 20.3018 532.307C19.8835 533.292 19.413 534.058 18.9425 534.755C20.8681 541.622 24.7455 546.893 29.1805 548.592C33.5458 550.282 39.7671 549.097 45.8489 545.394C50.0661 536.272 59.9556 521.755 81.9651 499.145C95.6215 485.244 104.873 469.116 113.8 453.551L113.812 453.531C119.458 443.676 124.799 434.371 131.125 425.666L131.543 425.091Z"
          data-darkreader-inline-fill=""
          fill="currentColor"
          
        ></path>
      </g>
    </g>
  );
};

export default Forearms;
