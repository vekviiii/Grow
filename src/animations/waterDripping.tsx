//Images
import Plant from "../images/Plant.png";
import WaterDrop from "../images/single-water-drop-on-transparent-background.webp";

const waterDripping = () => {
  return (
    <div className="place-self-center lg:place-self-start">
      <div className="relative">
        <img
          className="aspect-square drop-shadow-black"
          src={Plant}
          alt="Plant"
          height={"100%"}
          width={"100%"}
        />
        <img
          className="aspect-square absolute top-0 left-[120px] h-7 animate-raindrop"
          src={WaterDrop}
          alt="Water-Drop"
          style={{ animationDelay: "0s", animationDuration: "2s" }}
        />

        <img
          className="aspect-square absolute top-4 left-[200px] h-7 animate-raindrop"
          src={WaterDrop}
          alt="Water-Drop-4"
          style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
        />

        <img
          className="aspect-square absolute top-8 left-[50px] h-7 animate-raindrop"
          src={WaterDrop}
          alt="Water-Drop-2"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        />

        <img
          className="aspect-square absolute top-10 left-[250px] h-7 animate-raindrop"
          src={WaterDrop}
          alt="Water-Drop-3"
          style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
        />
      </div>
    </div>
  );
};

export default waterDripping;
