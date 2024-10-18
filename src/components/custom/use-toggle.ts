import { useState } from "react";

export const useToggle = (defaultValue?: boolean) => {
  const [isOpen, setIsOpen] = useState(!!defaultValue);
  const toggle = () => setIsOpen((prev) => !prev);
  return { isOpen, toggle };
};
