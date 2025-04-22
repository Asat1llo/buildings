import React from 'react';

const About = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-stretch gap-16 w-full max-w-[1280px]">
        
        {/* Image Container */}
        <div className="relative w-full max-w-lg flex-shrink-0 h-auto">
          <img src="/about-left.webp" alt="About main" className="w-full h-auto object-cover rounded-md shadow-md" />
          <div className="absolute right-[-40px] bottom-[-40px]">
            <img src="/about-left-bt.webp" alt="Decorative" className="w-36 h-auto" />
          </div>
        </div>

        {/* Text Container */}
        <div className="flex-1 flex flex-col justify-center h-full gap-8 font-['Inter']">
          <p className="text-base text-gray-700">About Us</p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
            We are Specializing in
            <br />
            interior Improvements
          </h2>

          <p className="text-base text-gray-500 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra posuere sem purus enim eleifend habitant arcu, sed.
          </p>

          {/* Feature Cards */}
          <div className="flex flex-wrap sm:flex-nowrap justify-start gap-8 sm:gap-12 mb-10">
            {[{
              title: "Free Consultation",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              icon: "/support.svg"
            }, {
              title: "Best Team Members",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              icon: "/team.svg"
            }].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-start space-y-3 flex-1 min-w-[160px] max-w-[200px]"
              >
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
                <p className="text-base font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-[#2bb1e0] text-white text-base font-semibold px-6 py-3 rounded shadow-md hover:brightness-110 transition w-max block">
            Explore Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
