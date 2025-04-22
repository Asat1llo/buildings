import React from "react";


const Choos = () => {
  return (
    <section className="bg-[#f0f9f9] w-full py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:max-w-lg">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            We are trusted by hundreds of clients around the world. Our mission is to provide high-quality service that
            solves your real-world problems with modern and scalable solutions. With a dedicated team and years of
            experience, we guarantee your satisfaction from start to finish.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-[#00a8cc] hover:bg-[#0089a6] text-white text-sm md:text-base font-semibold px-6 py-2.5 rounded-md transition-colors"
            aria-label="Read more about why people choose us"
          >
            Read more
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/man&woman.webp"
            alt="Professional business people reviewing documents"
            className="w-full max-w-md  "
            width={400}
            height={300}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Choos;
