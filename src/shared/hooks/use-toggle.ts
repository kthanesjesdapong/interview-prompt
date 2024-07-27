import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleOn = () => {
    setToggle(true);
  };

  const toggleOff = () => {
    setToggle(false);
  };

  return {
    toggle,
    toggleOn,
    toggleOff
  };
};