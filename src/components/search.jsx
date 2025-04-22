import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Search = () => {
  const [selected, setSelected] = useState({
    location: "California",
    property: "Delux",
    price: "$0 - $1000",
  });

  const [open, setOpen] = useState(null);

  const toggle = (menu) => {
    setOpen(open === menu ? null : menu);
  };

  const handleSelect = (menu, value) => {
    setSelected((prev) => ({ ...prev, [menu]: value }));
    setOpen(null);
  };

  const menus = {
    location: ["California", "New York", "Texas", "Florida"],
    property: ["Delux", "Studio", "Family House", "Penthouse"],
    price: ["$0 - $1000", "$1000 - $5000", "$5000+", "$10000+"],
  };

  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
      {Object.keys(menus).map((menu) => (
        <div key={menu} className="relative w-full sm:w-48">
          {/* Dropdown toggle */}
          <div
            onClick={() => toggle(menu)}
            className="border border-gray-300 rounded-md bg-white px-4 py-3 flex flex-col shadow-sm hover:shadow-md cursor-pointer transition focus:outline-none"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 capitalize">
                {menu}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  open === menu ? "rotate-180" : ""
                }`}
              />
            </div>
            <span className="text-sm font-semibold text-gray-800 mt-1 truncate">
              {selected[menu]}
            </span>
          </div>

          {/* Dropdown menu */}
          {open === menu && (
            <ul className="absolute left-0 right-0 mt-2 bg-white border shadow-md rounded-md z-30 text-sm max-h-60 overflow-y-auto">
              {menus[menu].map((item) => (
                <li
                  key={item}
                  onClick={() => handleSelect(menu, item)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Search button */}
      <div className="w-full sm:w-auto">
        <button className="w-full sm:w-auto px-20 py-6 bg-[#00B2E3] text-white font-semibold text-sm hover:bg-[#0098c4] transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
