import React from "react";

const Clock: React.FC = (props) => {
  const { className, width, color } = props;
  const height = width;

  return (
    <svg className={className} width={width} height={height}>
      <rect stroke={color} />
    </svg>
  );
};

export default Clock;
