import WaterDripping from "../../animations/waterDripping";

const Facade = () => {
  return (
    <>
      <div className="bg-gradient-to-b lg:bg-gradient-to-r from-[#3E7B27] to-[#85A947] grid-cols-1 lg:grid-cols-2 rounded-3xl grid items-center">
        <WaterDripping />
        <h1 className="text-[100px] lg:text-[200px] text-center py-2 animate-glowingText text-[#3E7B27]">
          Grow.
        </h1>
      </div>
    </>
  );
};

export default Facade;
