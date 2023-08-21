import React from "react";

const Shoulders = () => {
  return (
    <g
      id="shoulders"
      className="body-map__muscle"
      style={{ stroke: "black" }}
      onMouseOver={(e) => {
        e.currentTarget.style.fill = "red";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.fill = "none";
      }}
    >
      <g className="body-map__muscle" id="shoulders">
        <path
          d="M229.447 251.746C239.028 244.299 248.146 237.211 256.961 228.852C250.914 222.405 239.857 212.689 220.862 213.299C220.858 213.299 220.848 213.3 220.835 213.302C220.796 213.307 220.721 213.317 220.618 213.317C216.462 213.77 159.678 221.211 146.852 288.25C150.033 286.194 154.982 283.624 160.096 283.345C160.551 283.33 161.071 283.304 161.631 283.276C161.748 283.27 161.867 283.264 161.987 283.258C171.092 282.857 192.422 281.898 208.568 268.358C215.451 262.59 222.108 257.423 228.556 252.439L229.447 251.746Z"
          data-darkreader-inline-fill=""
          fill="currentColor"
          
        ></path>
        <path
          d="M491.111 283.345C496.234 283.624 501.175 286.203 504.373 288.25C491.564 221.333 434.972 213.805 430.607 213.317C430.45 213.317 430.345 213.299 430.345 213.299H430.328C411.333 212.724 400.311 222.439 394.264 228.852C403.267 237.381 412.551 244.587 422.362 252.201L422.669 252.439C429.117 257.423 435.774 262.59 442.64 268.358C446.595 271.66 450.856 274.239 455.169 276.217C468.5 282.334 482.354 282.961 489.22 283.258C489.377 283.265 489.53 283.273 489.679 283.281C490.201 283.307 490.677 283.331 491.111 283.345Z"
          data-darkreader-inline-fill=""
          fill="currentColor"
          
        ></path>
      </g>
    </g>
  );
};

export default Shoulders;
