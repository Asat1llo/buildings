import { Search } from "../components"

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover bg-center">
      {/* Proper overlay with opacity */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center  h-full px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Find Your Dream House
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra<br className="hidden sm:block" />
            posuere sem purus enim eleifend habitant arcu, sed.
          </p>
        </div>

          {/* Search */}
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Search />
           </div>
      </div>
    </div>
  )
}

export default Hero

