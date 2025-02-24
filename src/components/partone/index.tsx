import { useEffect } from "react";
import "../../animations/fadeIn.css";
import { Card } from "../../utils/cardComponent";
import { motion, useScroll, useTransform } from "framer-motion";

// const WaterDrop = () => {
//   const { scrollYProgress } = useScroll(); // ✅ Track entire window scroll

//   // ✅ Map scroll progress to move water drop from top to bottom of viewport
//   const y = useTransform(scrollYProgress, [0, 1], [-500, window.innerHeight - 500]);

//   return (
//     <motion.div
//       style={{
//         position: "fixed", // ✅ Stays fixed on the screen
//         left: "50%",
//         transform: "translateX(-50%)",
//         width: 20,
//         height: 20,
//         borderRadius: "50%",
//         backgroundColor: "blue",
//         zIndex: "999",
//         y, // ✅ Animate vertical movement
//       }}
//     />
//   );
// };

const PartOne = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".fade-in:not(.fade-in-animation)"
      );

      const elementsLeft = document.querySelectorAll(
        ".fade-in-left:not(.fade-in-left-animation)"
      );

      if (!elements.length && !elementsLeft.length) {
        window.removeEventListener("scroll", handleScroll);
        return;
      }

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
          element.classList.add("fade-in-animation");
        }
      });

      elementsLeft.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
          element.classList.add("fade-in-left-animation");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="text-center" style={{ padding: "10% 0px" }}>
        

        {/* CARDS */}
        <div className="flex justify-between flex-col md:flex-row py-[40px]">
          <div>
            <Card delay={"0s"} className="fade-in-left mb-3">
              <div className="fade-in-left flex justify-center">
                <img
                  width="200"
                  height="200"
                  src="/../../images/partOne/wavy-leaves.svg"
                />
              </div>
            </Card>
            <span>Touch Some Grass</span>
          </div>
          <div>
            <Card
              delay={window.innerWidth >= 769 ? "0.2s" : "0s"}
              className="fade-in-left mb-3"
            >
              <div className="fade-in-left flex justify-center">
                <img
                  width="200"
                  height="200"
                  src="/../../images/partOne/spiky-leaves.svg"
                />
              </div>
            </Card>
            <span>Touch Some Grass</span>
          </div>
          <div>
            <Card
              delay={window.innerWidth >= 769 ? "0.4s" : "0s"}
              className="fade-in-left mb-3"
            >
              <div className="fade-in-left flex justify-center">
                <img
                  width="200"
                  height="200"
                  src="/../../images/partOne/two-leaves.svg"
                />
              </div>
            </Card>
            <span>Touch Some Grass</span>
          </div>
          <div>
            <Card
              delay={window.innerWidth >= 769 ? "0.6s" : "0s"}
              className="fade-in-left mb-3"
            >
              <div className="fade-in-left flex justify-center">
                <img
                  width="200"
                  height="200"
                  src="/../../images/partOne/weird-leaves.svg"
                />
              </div>
            </Card>
            <span>Touch Some Grass</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOne;