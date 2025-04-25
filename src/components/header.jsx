import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const suggestions = ["Tennis Core", "Zendaya", "Streetwear", "Activewear"];

  const menuItems = [
      { label: "Home", path: "/home" },
      { label: "Brands To Know", path: "/brands" },
      { label: "Just Landed", path: "/landed" },
      { label: "Stores To Shop", path: "/stores" },
      { label: "About", path: "/about" },
    ];

  return (
    
    <nav className="w-full px-4 py-3 flex items-center justify-between fixed bg-white z-20">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Left Nav (desktop only) */}


      <div className="w-1/3">
        <ul className="hidden md:flex space-x-8 text-sm">
            {menuItems.map(({ label, path }) => (
              <li key={path} className="relative">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative font-medium px-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-red-300 after:transition-opacity after:duration-300
                    ${isActive ? "font-semibold after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
      
      <div className="w-1/3 text-center">
        {/* Center Logo */}
        <div className="flex items-center justify-center space-x-2 p-2">
          <img src="./icons/monde-logo.png" alt="icon" className="w-10 h-10 mr-2" />
          <h2 className="font-sans text-4xl font-bold pl-2">MONDE</h2>
        </div>
      </div>
     
      <div className="w-1/3">
        {/* Right Side */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {/* Desktop Search */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded-md text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>

          {/* Mobile Search Icon */}
          <button className="md:hidden" onClick={() => setShowMobileSearch(true)}>
            <Search size={22} />
          </button>
        </div>
      </div>


      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-4 py-3 z-10 transition-opacity duration-300 ease-in-out animate-fade-in">
          <a href="#" className="block py-2 text-sm">Home</a>
          <a href="#" className="block py-2 text-sm">Brands To Know</a>
          <a href="#" className="block py-2 text-sm">Just Landed</a>
          <a href="#" className="block py-2 text-sm">Stores To Shop</a>
          <a href="#" className="block py-2 text-sm">About</a>
        </div>
      )}

      {/* Mobile Fullscreen Search */}
      {showMobileSearch && (
        <div className="absolute inset-0 bg-white flex items-center justify-center px-4 z-30 transition-opacity duration-300 ease-in-out animate-fade-in">
          <div className="flex w-full gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 border px-4 py-2 rounded-md text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button onClick={() => setShowMobileSearch(false)}>
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      { /* Filtered Search */}
      {searchQuery && (
        <div className="absolute top-[60%] w-full max-w-md mx-auto bg-white border mt-2 rounded shadow z-40">
            {suggestions
            .filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((item, i) => (
                <div
                key={i}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm align-middle"
                onClick={() => {
                    setSearchQuery(item);
                    setShowMobileSearch(false); // optionally close after selection
                }}
                >
                {item}
                </div>
            ))}
        </div>
        )}

    </nav>
  );
}
