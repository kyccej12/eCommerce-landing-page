export default function Brands() {
    const brands = [
      "/brands/nudelucy.png",
      "/brands/essentials.png",
      "/brands/adidas.png",
      "/brands/staud.png",
      "/brands/makeup.png",
      "/brands/makeup.png",
    ];
  
    return (
      <div className="py-10">
        {/* Title */}
        <div className="flex items-center justify-center mb-6">
          <img src="/icons/dressform.png" alt="icon" className="w-15 h-15 mr-2" />
          <h2 className="text-3xl font-serif">Brands to Know</h2>
        </div>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 px-4">
          {brands.map((src, idx) => (
            <div
              key={idx}
              className="aspect-square shadow-xl flex items-center justify-center"
            >
              <img src={src} alt={`Brand ${idx + 1}`} className="max-w-[80%] max-h-[80%] object-contain" />
            </div>
          ))}
        </div>
  
        {/* Carousel arrows (optional display only) */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className="text-4xl text-gray-400 hover:text-black">‹</button>
          <button className="text-4xl text-gray-400 hover:text-black">›</button>
        </div>
      </div>
    );
  }
  