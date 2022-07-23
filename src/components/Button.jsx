import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = (props) => {
  const { bgColor, size, color, text, borderRadius, icon } = props;
  const { currentColor } = useStateContext();

  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
