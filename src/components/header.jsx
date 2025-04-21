import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const suggestions = ["Tennis Core", "Zendaya", "Streetwear", "Activewear"];

  return (
    
    <nav className="w-full border-b px-4 py-3 flex items-center justify-between relative bg-white z-20">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Left Nav (desktop only) */}
      <div className="hidden md:flex gap-8 absolute left-4 top-1/2 -translate-y-1/2">
        <a href="#" className="text-sm font-medium font-sans font-stretch-expanded uppercase hover:text-gray-600">Home</a>
        <a href="#" className="text-sm font-medium font-sans font-stretch-expanded uppercase hover:text-gray-600">Stories</a>
        <a href="#" className="text-sm font-medium font-sans font-stretch-expanded uppercase hover:text-gray-600">Style</a>
      </div>

      {/* Center Logo */}
      <div className="font-sans mx-auto text-4xl font-bold tracking-widest uppercase">
        MONDE
      </div>

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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-4 py-3 z-10 transition-opacity duration-300 ease-in-out animate-fade-in">
          <a href="#" className="block py-2 text-sm">Home</a>
          <a href="#" className="block py-2 text-sm">Stories</a>
          <a href="#" className="block py-2 text-sm">Style</a>
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
