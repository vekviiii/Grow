import "./index.css";

const Footer = () => {
  return (
    <>
      <div className="bg-conical-to-b bg-gradient-to-r from-[#141414] to-[#333]">
        <div className="container mx-auto">
          <div className="img-container">
            <div>
              <img
                width="30"
                height="30"
                src="/../../images/footer/facebook.svg"
                alt="facebook-f"
              />
            </div>
            <div>
              <img
                width="30"
                height="30"
                src="/../../images/footer/instagram.svg"
                alt="instagram-new"
              />
            </div>
            <div>
              <img
                width="30"
                height="30"
                src="/../../images/footer/twitter.svg"
                alt="twitter"
              />
            </div>
            <div>
              <img
                width="35"
                height="35"
                src="/../../images/footer/linkedin.svg"
                alt="linkedin"
              />
            </div>
          </div>
          <ul>
            <li><a href="/"></a>Home</li>
            <li><a href="/product">Product</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us"></a>Contact</li>
          </ul>
          <div className="text-gray-500 text-[12px] py-2 ">
            Copyright © 2025 All Rights Reserved. GROW.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;