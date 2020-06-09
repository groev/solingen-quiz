import React from "react";

export default function Loader() {
  return (
    <div id="Loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
      >
        <path
          d="M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z"
          fill="#000"
          transform="rotate(99.6966 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1.2s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
        <circle cx="50" cy="50" r="16" fill="#FFF"></circle>
      </svg>
    </div>
  );
}
