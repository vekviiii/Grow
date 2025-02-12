

const Header = () => {
  return (
    <div className="bg-gradient-to-b lg:bg-gradient-to-r from-[#141414] to-[#333] sticky top-0" style={{zIndex: "999"}}>
      <div className="container mx-auto flex py-2" >
        <div className="text-[#85A947] text-3xl my-auto">GROW.</div>
            <ul className="text-white flex gap-4 m-auto">
                <li><a href="/" className="nav-links">Home</a></li>
                <li><a href="product" className="nav-links">Product</a></li>
                <li><a href="about-us" className="nav-links">About Us</a></li>
                <li><a href="contact-us" className="nav-links">Contact Us</a></li>
            </ul>
      </div>
    </div>
  );
};

export default Header;
