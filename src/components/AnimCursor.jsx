import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export const AnimCursor = () => {
  const [cursorColor, setCursorColor] = useState("255, 255, 255");

  useEffect(() => {
    // Function to update cursor color from CSS variable
    const updateCursorColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--cursor-color")
        .trim();
      setCursorColor(color || "255, 255, 255");
    };

    // Initial update
    updateCursorColor();

    // Observe theme changes using MutationObserver
    const observer = new MutationObserver(updateCursorColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedCursor
      innerSize={25}
      outerSize={8}
      color={cursorColor}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
};
