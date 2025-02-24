import { motion, useScroll, useTransform } from "framer-motion";

const WaterDrop = () => {
  const { scrollYProgress } = useScroll(); // Track entire window's scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight]); // Move from top to bottom of window

  return (
    <motion.div
      style={{
        position: "fixed", // Keep it fixed relative to the viewport
        left: "50%",
        transform: "translateX(-50%)",
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "blue",
        y, // Apply motion effect
      }}
    />
  );
};

const Playground = () => {
  return (
    <div style={{ height: "200vh", backgroundColor: "#f0f8ff" }}>
      <WaterDrop />
      <h1 style={{ textAlign: "center", paddingTop: "50vh" }}>
        Scroll Down to See the Waterdrop Move
      </h1>
    </div>
  );
};

export default Playground;