const NewsletterSection = () => {
    return (
      <section className="bg-[#d9c748] px-6 py-16 text-black text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/icons/monde-round.png"
            alt="Monde Now"
            className="h-20 w-20 object-contain"
          />
        </div>
  
        {/* Description */}
        <p className="max-w-md mx-auto font-medium text-sm leading-relaxed">
          Monde is the home to a carefully curated selection of brands, and an
          infinite source of inspiration from around the globe.
        </p>
  
        {/* Newsletter Form */}
        <div className="max-w-md mx-auto text-left space-y-2">
          <p className="text-xs font-bold tracking-widest uppercase">
            Subscribe to our newsletter
          </p>
  
          {/* Hover group for animation */}
          <div className="flex items-center border-b border-black pb-1 group">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent placeholder-gray-700 text-sm focus:outline-none flex-1"
            />
            <button className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default NewsletterSection;
  