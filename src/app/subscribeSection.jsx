import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="bg-[#e9f7fa] w-full py-16 px-4">
      <div className="bg-[#2bb1db] rounded-xl max-w-2xl mx-auto p-8 shadow-md">
        <h2 className="text-white font-bold text-center text-base md:text-lg mb-6">
          For Daily Update Subscribe Now
        </h2>
        <form className="flex flex-col sm:flex-row items-center gap-3 bg-white px-2 py-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-grow rounded-md px-4 py-2 text-sm outline-none "
          />
          <button
            type="submit"
            className="bg-[#2bb1db] text-white px-6 py-2 rounded-md text-sm font-semibold cursor-pointer transition border border-transparent hover:border-[#2bb1db]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
