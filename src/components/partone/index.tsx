import { useEffect } from "react";
import "../../animations/fadeIn.css";
import { Card } from "../../utils/card component";

const PartOne = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".fade-in:not(.fade-in-animation)"
      );

      if (!elements.length) {
        // No elements left to animate, remove event listener
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="text-center" style={{ padding: "10% 0px" }}>
        <h1 className="fade-in">Grow: Nurturing Nature, One Leaf at a Time.</h1>
        <div className="flex justify-between flex-col md:flex-row py-[40px]">
          <Card>
            <div className="fade-in flex justify-center pb-3">
              <img
                width="200"
                height="200"
                src="/../../images/partOne/wavy-leaves.svg"
              />
            </div>
            <span>Touch Some Grass</span>
          </Card>
          <Card>
            <div className="fade-in flex justify-center pb-3">
              <img
                width="200"
                height="200"
                src="/../../images/partOne/spiky-leaves.svg"
              />
            </div>
            <span>Touch Some Grass</span>
          </Card>
          <Card>
            <div className="fade-in flex justify-center pb-3">
              <img
                width="200"
                height="200"
                src="/../../images/partOne/two-leaves.svg"
              />
            </div>
            <span>Touch Some Grass</span>
          </Card>
          <Card>
            <div className="fade-in flex justify-center pb-3">
              <img
                width="200"
                height="200"
                src="/../../images/partOne/weird-leaves.svg"
              />
            </div>
            <span>Touch Some Grass</span>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PartOne;
