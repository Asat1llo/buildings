import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white  fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-end gap-2 cursor-pointer">
          <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
          <span className="font-semibold text-lg text-[#02012B]">Building</span>
        </div>

        {/* Desktop Nav */}   
        <nav className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 text-sm font-medium text-[#02012B]">
            <li className="cursor-pointer hover:text-[#19BCE4]">Home</li>
            <li className="cursor-pointer hover:text-[#19BCE4]">Services</li>
            <li className="cursor-pointer hover:text-[#19BCE4]">About Us</li>
            <li className="cursor-pointer hover:text-[#19BCE4]">Properties</li>
            <li className="cursor-pointer hover:text-[#19BCE4]">Contact</li>
          </ul>
          <button className="px-6 py-2.5 bg-[#19BCE4] text-white rounded-md hover:bg-[#17aacd] transition">
            Log in
          </button>
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t">
          <ul className="flex flex-col gap-4 text-[#02012B] font-medium">
            <li className="cursor-pointer hover:text-[#19BCE4]">Home</li>
            <li className="cursor-pointer hover:text-[#19BCE4]">Services</li>
            <li className="cursor-pointer hover:text-[#19BCE4]">About Us</li>
            <li className="cursor-pointer hover:text-[#19BCE4]">Properties</li>
            <li className="cursor-pointer hover:text-[#19BCE4]">Contact</li>
          </ul>
          <button className="mt-4 w-full px-6 py-2.5 bg-[#19BCE4] text-white rounded-md hover:bg-[#17aacd] transition">
            Log in
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
