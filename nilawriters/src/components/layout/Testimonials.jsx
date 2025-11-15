import testImage1 from "../../assets/images/test_one.jpg";
import testImage2 from "../../assets/images/test_two.jpg";
import testImage3 from "../../assets/images/test_three.jpg";

function Testimonial() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={testImage1}
            alt="Lyn K."
            className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
          />
          <blockquote className="text-lg text-gray-700 italic">
            “NilaWriters transformed our messaging. Their words didn’t just inform — they moved people.”
          </blockquote>
          <p className="mt-4 text-gray-500">— Lyn K., Content Creator</p>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={testImage2}
            alt="Suzzy M."
            className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
          />
          <blockquote className="text-lg text-gray-700 italic">
            “Working with NilaWriters was seamless. They understood our tone, our goals, and delivered content that truly connected.”
          </blockquote>
          <p className="mt-4 text-gray-500">— Suzzy M., Marketing Lead</p>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={testImage3}
            alt="Tony N."
            className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
          />
          <blockquote className="text-lg text-gray-700 italic">
            “Their editorial insight elevated our content. Every piece felt intentional, clear, and deeply aligned with our brand.”
          </blockquote>
          <p className="mt-4 text-gray-500">— Tony N., Blogger, YoungWe</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;