import { useState } from "react";  
import { ProductCard } from "./ProductCard";

export default function JustLandedSection() {
    const [activeTab, setActiveTab] = useState("Women");

    const tabs = ["Women", "Men", "Beauty", "Living"];

    const productData = {
            Women: [
        {
            name: "Bonds",
            desc: "One line product name",
            store: "Store Name",
            price: 282.25,
            discountedPrice: 84.67,
            img: "/products/bonds.png",
        },
        {
            name: "Bonds",
            desc: "One line product name",
            store: "Store Name",
            price: 282.25,
            img: "/products/bonds.png",
        },
    ],
            Men: [
        {
            name: "POP Hoodie",
            desc: "One line product name",
            store: "Store Name",
            price: 190.0,
            img: "/products/hoodie.png",
        },
    ],
            Beauty: [
        {
            name: "Lipstick Pro",
            desc: "One line product name",
            store: "Store Name",
            price: 45.0,
            discountedPrice: 30.0,
            img: "/products/lipstick.png",
        },
    ],
            Living: [
        {
            name: "Candle Set",
            desc: "One line product name",
            store: "Store Name",
            price: 60.0,
            img: "/products/candle.png",
        },
    ],
};
  
    return (
      <div className="bg-[#e8e3d7] py-8 px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <img src="/icons/tag.png" alt="icon" className="mx-auto mb-2 w-8" />
          <h2 className="text-3xl font-serif">Just Landed</h2>
        </div>
  
        {/* Tabs */}
        <div className="flex justify-center gap-6 uppercase font-medium text-sm mb-6">
          {tabs.map((tab) => (
            <button
                key={tab}
                className={`pb-1 ${
                    activeTab === tab
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
          ))}
        </div>
  
       {/* Dynamic Products */}
       <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
          {productData[activeTab]?.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
       </div>
  
        {/* Arrow Optional */}
        <div className="flex justify-center mt-4 gap-4 text-4xl text-gray-400">
          <button>‹</button>
          <button>›</button>
        </div>
      </div>
    );
  }
  