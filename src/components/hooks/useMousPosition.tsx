import { useEffect, useState, MouseEvent } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    // @ts-ignore
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      // @ts-ignore
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
