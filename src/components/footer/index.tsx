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
                src="https://img.icons8.com/ios-glyphs/30/facebook-f.png"
                alt="facebook-f"
              />
            </div>
            <div>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
                alt="instagram-new"
              />
            </div>
            <div>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/android/24/twitter.png"
                alt="twitter"
              />
            </div>
            <div>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/android/24/linkedin.png"
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