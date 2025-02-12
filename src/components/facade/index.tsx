import WaterDripping from "../../animations/waterDripping";

const Facade = () => {
  return (
    <div className="bg-gradient-to-b lg:bg-gradient-to-r from-[#3E7B27] to-[#85A947]">
      <div className="grid-cols-1 lg:grid-cols-2 grid items-center container mx-auto">
        <WaterDripping />
        <h1 className="text-[100px] lg:text-[160px] text-center py-2 animate-glowingText text-[#3E7B27]">
          Grow.
        </h1>
      </div>
    </div>
  );
};

export default Facade;
