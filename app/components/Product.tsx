import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
export default function Component() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4 ">Featured Products</h2>
    <div className="flex flex-wrap bg-gray-100 p-4 gap-7 justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/8.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Wireless Headphones</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$129.99</span>
            <span className="text-sm text-gray-500 line-through">$159.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg  overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/9.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Running Shoes</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$89.99</span>
            <span className="text-sm text-gray-500 line-through">$99.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/10.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Smartphone Case</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$19.99</span>
            <span className="text-sm text-gray-500 line-through">$29.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/11.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Fitness Tracker</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$69.99</span>
            <span className="text-sm text-gray-500 line-through">$89.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/12.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Wireless Earbuds</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$99.99</span>
            <span className="text-sm text-gray-500 line-through">$129.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/13.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Leather Jacket</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$199.99</span>
            <span className="text-sm text-gray-500 line-through">$229.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/14.crdownload?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Sunglasses</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$49.99</span>
            <span className="text-sm text-gray-500 line-through">$69.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/15.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Yoga Mat</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$39.99</span>
            <span className="text-sm text-gray-500 line-through">$59.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/16.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Wireless Keyboard</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$59.99</span>
            <span className="text-sm text-gray-500 line-through">$79.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
        <div className="relative">
          <Image
            src="/17.jpg?height=300&width=300&text=Product+Image"
            alt="Wireless Headphones"
            width={300}
            height={300}
            className="w-full h-64 object-fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Gaming Headset</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">$89.99</span>
            <span className="text-sm text-gray-500 line-through">$109.99</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Add Wireless Headphones to cart"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>



    </div>
    </>
  )
}