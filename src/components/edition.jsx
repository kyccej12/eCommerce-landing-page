import modelImg from '../img/girl-model.jpg'; 

    const EditionSection = () => {
        const article = [
            {
                category: "WOMEN",
                title: "The Edition Article Title that spans more than one line",
                img: "/edition/e_women.png",
            },
            {
                category: "BEAUTY",
                title: "The Edition Article Title that spans more than one line",
                img: "/edition/e_beauty.png",
            },
            {
                category: "MEN",
                title: "The Edition Article Title that spans more than one line",
                img: "/edition/e_men.png",
            },
            {
                category: "LIVING",
                title: "The Edition Article Title that spans more than one line",
                img: "/edition/e_living.png",
            },
        ];
            

        return (
            <section className="bg-[#C44A22] text-white py-6 px-4 space-y-6 lg:space-y-0 lg:px-16">
                {/* Header */}
                <div className="text-center mb-6">
                    <img src="/icons/edition-logo.png" alt="icon" className="mx-auto mb-2 h-15" />
                    <h2 className="text-3xl font-serif">From The Edition</h2>
                </div>

                {/* Main Content Wrapper */}
                <div className="lg:flex lg:space-x-6">
                    {/* Featured */}
                    <div className="relative lg:w-1/2">
                        <img src={modelImg} alt="Featured" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-6 text-center">
                            <div className="bg-cyan-500 p-4 text-black">
                                <p className="text-sm font-medium">WOMEN</p>
                                <h3 className="font-serif text-xl leading-normal">
                                    Sustainable Brands to shop at The Iconic this Earth Day
                                </h3>
                            </div>
                            <button className="mt-4 bg-cyan-500 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-600 self-center">
                                READ STORY →
                            </button>
                        </div>
                    </div>

                    {/* Article List */}
                    <div className="space-y-4 mt-6 lg:mt-0 lg:w-1/2">
                        {article.map((article, idx) => (
                            <div key={idx} className="bg-white text-black flex items-center rounded space-x-3 p-3">
                                <img src={article.img} alt="" className="w-24 h-24 object-cover rounded" />
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-gray-500">{article.category}</p>
                                    <h4 className="font-serif font-medium leading-snug">{article.title}</h4>
                                    <div className="flex justify-end mr-2">
                                        <button className="mt-1 text-sm text-gray-700 font-semibold flex items-center hover:underline">
                                            READ STORY <span className="ml-2">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        );
    };

export default EditionSection;
