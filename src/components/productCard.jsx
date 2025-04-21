export function ProductCard({ product }) {
  const { name, desc, price, discountedPrice, store, img } = product;

  return (
    <div className="w-60 bg-white rounded-lg overflow-hidden shadow-sm flex-shrink-0">
      {/* Image */}
      <div className="aspect-[3/4] bg-gray-100">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-3 text-sm">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-500 mb-1">{desc}</p>

        {/* Prices */}
        {discountedPrice ? (
          <div>
            <p className="text-xs line-through text-gray-400">
              AUD {price.toFixed(2)}
            </p>
            <p className="text-orange-600 font-semibold">
              AUD {discountedPrice.toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="font-semibold">AUD {price.toFixed(2)}</p>
        )}

        {/* Store link */}
        {store && (
          <div className="mt-2 flex items-center gap-1 text-gray-400 text-xs">
            <span className="text-base">↗</span>
            <span>{store}</span>
          </div>
        )}
      </div>
    </div>
  );
}
