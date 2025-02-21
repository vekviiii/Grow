import Slider from "react-slick";

function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <span>About Us</span>
        </div>
      </Slider>
    </div>
  );
}

export default AboutUs;
