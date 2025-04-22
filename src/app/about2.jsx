import React from "react";

const features = [
  {
    icon: "/house.svg",
    title: "Family House",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar at augue vestibulum euismod risus",
  },
  {
    icon: "/building.svg",
    title: "Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar at augue vestibulum euismod risus",
  },
  {
    icon: "/computer.svg",
    title: "Studio & Offices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar at augue vestibulum euismod risus",
  },
  {
    icon: "/house2.svg",
    title: "Villa & Condo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar at augue vestibulum euismod risus",
  },
];

const About2 = () => {
  return (
    <section className="bg-[#19BCE433] font-['Inter'] w-full min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-10">
          What are you looking for?
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/building.webp"
              alt="Modern city buildings"
              className="w-full h-auto object-cover rounded shadow"
              loading="lazy"
            />
          </div>

          {/* Features */}
          <div className="w-full md:w-1/2 space-y-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 bg-white p-4 rounded shadow-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 text-[#00bcd4]">
                  <img src={`${item.icon}`} alt="icon" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#222] mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#666] leading-tight max-w-[320px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
