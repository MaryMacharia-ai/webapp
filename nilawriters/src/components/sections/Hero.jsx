import backgroundImage from "../../assets/images/front_image.jpg";

function HeroCard() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-blue-50 py-20 px-6 flex justify-center">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100">
        {/* Text Content */}
        <div className="px-10 py-12 text-center space-y-6">
          <h1 className="text-blue-600 font-semibold text-[72px] leading-[120%] font-saira drop-shadow-sm">
            Content That Inspires, Informs, and Connects
          </h1>
          <p className="text-blue-500 text-[24px] leading-[36px] tracking-[0.01em] font-saira">
            At NilaWriters, we craft stories that resonate, educate, and elevate your brand voice.
          </p>
        </div>

        {/* Image + Button */}
        <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-10 py-5 bg-white text-blue-600 text-[20px] font-semibold rounded-lg shadow hover:bg-blue-100 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCard;
