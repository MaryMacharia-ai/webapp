import { useRef } from "react";
import contImage from "../../assets/images/cont.jpg";
import humanizeImage from "../../assets/images/humanize.jpg";
import tutImage from "../../assets/images/onlinetut.jpg";
import webImage from "../../assets/images/webdesign.jpg";
import storytellingImage from "../../assets/images/storytell.jpg";
function WritingServicesShowcase() {
  const scrollRef = useRef(null);

  const services = [
    { title: "Content Creation", image: contImage }, 
    { title: "Humanizing AI Work", image: humanizeImage },
    { title: "Online Tutoring", image: tutImage },
    { title: "Brand Storytelling", image: storytellingImage },
    { title: "Webdesigning", image: webImage }, // 
  ];

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-start gap-10">
        
        {/* Left: Text Content */}
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">New Services Available</h2>
          <p className="text-gray-600 text-lg">
            Get impactful writing tailored to your goals — now with flexible packages and promo rates.
          </p>
          <button
            onClick={scrollToNext}
            className="text-blue-600 font-semibold hover:underline text-lg"
          >
            Check All →
          </button>
        </div>

        {/* Right: Scrollable Cards */}
        <div
          ref={scrollRef}
          className="md:w-2/3 flex gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center font-semibold text-gray-700">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WritingServicesShowcase