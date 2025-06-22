import AnimatedCursor from "react-animated-cursor";

export const AnimCursor = () => {
  return (
    <AnimatedCursor
        innerSize={25}
        outerSize={8}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
    />
  )
}


