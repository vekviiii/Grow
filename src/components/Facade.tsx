import WaterDripping from "../animations/waterDripping"

const Facade = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#3E7B27] to-[#85A947] columns-1 lg:columns-2 rounded-3xl m-2 p-2">
        <WaterDripping/>
        <h1 className="text-[100px] lg:text-[200px] text-center py-2 text-lime-400">
          Grow.
        </h1>
      </div>
    </>
  );
};

export default Facade;
