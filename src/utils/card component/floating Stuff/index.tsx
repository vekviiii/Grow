import { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import "./index.css";

const FloatingStuff = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const element = document.getElementById("makeItBigger");

    if (element) {
      element.addEventListener("click", toggleExpand);
    }

    return () => {
      if (element) {
        element.removeEventListener("click", toggleExpand);
      }
    };
  }, []);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <div
        id="makeItBigger"
        className={`floating-stuff ${expanded ? "expanded" : ""}`}
      >
        <div className="thisWillGrow">
          <PlusIcon
            className={`${expanded ? "size-0" : "size-6"} icon`}
            style={{ fill: "white" }}
          />
          <div className="floaters">Floater</div>
        </div>
      </div>
    </>
  );
};

export default FloatingStuff;