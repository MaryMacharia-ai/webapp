import writingPromoImage from "../../assets/images/writingpromo.jpg"; 

function WritingPromoSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Text Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            The Writing Partner Your Brand Deserves
          </h2>
          <p className="text-gray-600 text-lg">
            NilaWriters offers tailored content solutions for businesses, creators, and educators. Whether you're launching a new site, building authority, or telling your story — we help you write with clarity, purpose, and impact.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src={writingPromoImage}
            alt="Writing workspace"
            className="rounded-xl shadow object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default WritingPromoSection;