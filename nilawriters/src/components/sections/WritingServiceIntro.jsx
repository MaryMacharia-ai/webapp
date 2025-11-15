import writingImage from "../../assets/images/writing_services.jpg"; // Replace with your actual image

function WritingServicesIntro() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white to-blue-50 flex justify-center">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100 p-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={writingImage}
            alt="Writing workspace"
            className="rounded-xl shadow object-cover w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-700 font-saira">
            Elevate Your Brand Through Powerful Writing
          </h2>
          <p className="text-gray-700 text-lg">
            At NilaWriters, we specialize in crafting content that inspires, informs, and connects. Whether you're building a brand, launching a campaign, or educating your audience, our writing services are designed to deliver clarity, impact, and trust.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-800 font-medium">
                Blog & Article Writing — SEO-optimized, engaging, and tailored to your voice
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-800 font-medium">
                Website Copy — Clear, compelling messaging that converts visitors into clients
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-800 font-medium">
                Academic & Research Support — Structured, citation-ready content for scholarly needs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-800 font-medium">
                Brand Storytelling — Narratives that resonate and build emotional connection
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WritingServicesIntro