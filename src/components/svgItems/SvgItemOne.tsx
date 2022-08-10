import React from "react";

interface Props {
  color?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  className?: string;
}

export const SvgItemOne = ({ color, top, right, left, bottom,className }: Props) => {
  return (
    <div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          right: "-200",
          top: "-200",
          transform: "rotate(25deg)",
          width: "80%",
          height: "70%",
        }}
        className={className}
      >
        <path
          fill={color}
          d="M44.1,-75.2C56.1,-69.5,64.2,-55.6,65.2,-41.7C66.3,-27.8,60.5,-13.9,61.7,0.7C62.9,15.3,71.2,30.6,64.2,34.2C57.2,37.8,34.9,29.8,21.6,27.2C8.4,24.6,4.2,27.5,-3.1,32.9C-10.4,38.3,-20.9,46.3,-32.3,47.8C-43.8,49.4,-56.3,44.5,-62,35.5C-67.8,26.5,-66.8,13.2,-64.1,1.6C-61.4,-10.1,-57,-20.2,-48.2,-24.1C-39.5,-27.9,-26.4,-25.6,-17.7,-33.2C-8.9,-40.8,-4.5,-58.5,5.8,-68.5C16,-78.5,32.1,-80.9,44.1,-75.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export const SvgItemTow = ({ color, top, right, left, bottom,className }: Props) => {
  return (
    <svg
      viewBox="0 0 200 200"
      style={{
        position: "absolute",
        bottom: "-100",
        left: "-40%",
        width: "80%",
        height: "70%",
      }}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#FF0066"
        d="M35.1,-67.4C38.3,-58.9,28.8,-35,33.4,-21.2C37.9,-7.5,56.5,-3.7,64,4.3C71.5,12.4,68,24.8,61.5,35.2C55,45.6,45.5,53.9,34.7,62.5C24,71,12,79.7,3.4,73.8C-5.2,67.9,-10.3,47.4,-23.8,40.4C-37.3,33.5,-59.1,40.1,-69.9,35.6C-80.7,31.2,-80.5,15.6,-75.3,3C-70,-9.5,-59.8,-19.1,-53.8,-31.8C-47.8,-44.6,-46,-60.6,-37.7,-66.2C-29.5,-71.8,-14.7,-67.1,0.6,-68.2C15.9,-69.2,31.8,-76,35.1,-67.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};
