export default function ShopNav({ image, title, href, reverse = false }) {
  return (
    <a
      href={href}
      className={`flex ${
        reverse ? 'flex-row-reverse md:flex-col' : 'flex-row md:flex-col'
      } w-full h-full bg-[#e4dbc5]`}
    >
      {/* Image Section */}
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 bg-[#e4dbc5] p-2 pl-2 flex flex-col justify-center items-start text-black">
        <p className="text-xs uppercase tracking-wide">Shop</p>
        <h2 className="text-4xl font-serif">{title}</h2>
        <span className="text-5xl">→</span>
      </div>
    </a>
  );
}
