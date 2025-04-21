export default function Hero() {
    return (
        <div
          className="relative bg-cover bg-center md:bg-top h-[600px]"
          style={{
            backgroundImage:
              "url('src/img/bg.jpg')",
              backgroundPosition: '80% 30%'
          }}
        >
          {/* Overlay content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="bg-lime-600 px-4 p-4 py-4 text-white max-w-xl">
              <h1 className="text-xl font-semibold">Zendaya Made Me</h1>
              <p className="text-sm mt-1">Why you need ‘tennis-core’.</p>
            </div>
            <div className="flex justify-center msx-w-xs text-center">
                <button className="mt-4 bg-lime-500 hover:bg-lime-400 transition px-4 py-2 font-medium flex items-center justify-center gap-2">
                        READ STORY
                        <span className="text-lg">→</span>
                </button>
            </div>
          </div>
        </div>
      );
    }
    