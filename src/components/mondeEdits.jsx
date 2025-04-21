import { useRef } from "react";

const edits = [
  {
    title: "This Ain’t Texas; Our Beyonce Inspired Western Edit",
    img: "/edits/mens-fashion.jpg",
  },
  {
    title: "Another Edit Title Goes Here",
    img: "/edits/beauty-items.jpg",
  },
  {
    title: "Cowgirl-Inspired Fits You’ll Love",
    img: "/edits/fashion-clothes.jpg",
  },
];

const MondeEdits = () => {
  const scrollRef = useRef(null);

  return (
    <section className="bg-[#f8f4ec] px-4 py-10 text-black overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2">
          <img src="/icons/pen.png" alt="icon" className="w-10 h-10 mr-2" />
          <h2 className="text-2xl font-serif">Monde Edits</h2>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {edits.map((edit, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] snap-start text-center"
          >
            <img
              src={edit.img}
              alt={edit.title}
              className="w-full aspect-square object-cover rounded"
            />
            <p className="mt-2 font-medium text-sm leading-snug px-2">
              {edit.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MondeEdits;
