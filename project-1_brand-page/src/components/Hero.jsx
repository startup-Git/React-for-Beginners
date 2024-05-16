const HeroSection = () => {
  return (
    <main className="hero container">
      {/* hero content */}
      <div className="hero__content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        {/* hero content btn */}
        <div className="hero_btn">
          <button>shop Now</button>
          <button className="secondary_btn">Category</button>
        </div>

        {/* hero content icon */}
        <div className="hero__Shopping_icon">
          <p>Also Available On</p>
          <div className="hero__icon">
            <img src="/images/amazon.png" alt="amazon_icon" />
            <img src="/images/flipkart.png" alt="flip_kart" />
          </div>
        </div>
      </div>

      {/* hero image */}
      <div className="hero__image">
        <img src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
};
export default HeroSection;
