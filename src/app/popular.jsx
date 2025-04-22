import React from "react";

const places = [
  {
    name: "Bangladesh",
    properties: "50 Properties",
    img: "https://storage.googleapis.com/a1aa/image/284dc5de-ac69-4fca-bd73-0ac90f33c108.jpg",
  },
  {
    name: "Japan",
    properties: "50 Properties",
    img: "https://storage.googleapis.com/a1aa/image/491ea97b-faba-4401-9ea5-abdd20562387.jpg",
  },
  {
    name: "Malaysia",
    properties: "50 Properties",
    img: "https://storage.googleapis.com/a1aa/image/ef7c54d6-c456-4f33-5724-fe6f8cb71854.jpg",
  },
  {
    name: "London",
    properties: "50 Properties",
    img: "https://storage.googleapis.com/a1aa/image/984e4944-bb1a-44a2-ff94-f36b874c6649.jpg",
  },
];

const featured = {
  name: "India",
  properties: "50 Properties",
  img: "https://storage.googleapis.com/a1aa/image/8e6bcafa-0468-4806-7b3c-36a951e66c61.jpg",
};

const PopularPlaces = () => {
  return (
    <section className="bg-white w-full py-16 px-4 sm:px-8 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-extrabold text-xl md:text-2xl mb-2">
          Most Popular Places
        </h2>
        <p className="text-center text-sm text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Grid left: Featured image */}
          <div className="relative lg:col-span-1">
            <img
              src={featured.img}
              alt={featured.name}
              className="w-full h-full object-cover min-h-[300px] max-h-[600px]"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/50 rounded text-white text-center text-sm font-semibold w-32">
              {featured.name}
              <br />
              {featured.properties}
            </div>
          </div>

          {/* Grid right: 4 small cards */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {places.map((place, i) => (
              <div key={i} className="relative group">
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/50 rounded text-white text-center text-sm font-semibold w-32">
                  {place.name}
                  <br />
                  {place.properties}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
