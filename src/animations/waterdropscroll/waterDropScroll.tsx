import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WaterDropScroll = () => {
    const divRef = useRef(null)
    const { scrollYProgress } = useScroll({
        container: divRef,
    }); // Track entire window's scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, 480]); // Move from top to bottom of window
  
    return (
        <div
      ref={divRef}
      style={{
        height: "500px",
        width: "500px",
        overflowY: "hidden",
        position: "relative",
      }}
    >
        <motion.div
        style={{
          position: "fixed", // Keep it fixed relative to the viewport
          left: "50%",
          transform: "translateX(-50%)",
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--theme-color)",
          y, // Apply motion effect
        }}
      />
    </div>
    );
  };

export default WaterDropScroll;