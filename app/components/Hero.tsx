import Image from 'next/image';
export default function Component() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/1.gif"
          alt="hero section image"
          width={300}
          height={200}
          className="w-full h-full object-cover object-center rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Summer Collection 2024
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover our latest styles for the season. Cool, comfortable, and trendy.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/2.png"
              alt="Featured summer product"
              width={350}
              height={200}
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-20"></div>
    </section>
  )
}