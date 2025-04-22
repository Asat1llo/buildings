import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Williamsons",
    image:"/avatar1.webp",
    rating: [1, 1, 1, 1, 0.5],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere nulla id feugiat tincidunt. Nunc enim mauris velit integer. Vivamus vehiculae enim eget elementum.",
  },
  {
    name: "Farhad Reja",
    image:
      "/avatar2.webp",
    rating: [1, 1, 1, 1, 1],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere nulla id feugiat tincidunt. Nunc enim mauris velit integer. Vivamus vehiculae enim eget elementum.",
  },
  {
    name: "Peter Sams",
    image:
      "/avatar3.webp",
    rating: [1, 1, 1, 0.5, 0],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere nulla id feugiat tincidunt. Nunc enim mauris velit integer. Vivamus vehiculae enim eget elementum.",
  },
];

const renderStars = (rating) =>
  rating.map((r, idx) =>
    r === 1 ? (
      <FaStar key={idx} />
    ) : r === 0.5 ? (
      <FaStarHalfAlt key={idx} />
    ) : (
      <FaRegStar key={idx} />
    )
  );

const Testimonials = () => {
  return (
    <section className="bg-[#fdf9f2] text-[#1f1f1f] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">What People Say</h2>
        <p className="text-sm md:text-base text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-12">
          {testimonials.map((person, i) => (
            <div
              key={i}
              className="relative bg-white rounded-md pt-16 px-6 pb-6 shadow-md max-w-xs mx-auto text-center"
            >
              <img
                src={`${person.image}`}
                alt={`${person.name} avatar`}
                className="w-24 h-24 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-md"
              />
              <h3 className="text-sm font-semibold mb-1 mt-2">{person.name}</h3>
              <div className="flex justify-center mb-3 text-yellow-400 text-sm">
                {renderStars(person.rating)}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{person.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
