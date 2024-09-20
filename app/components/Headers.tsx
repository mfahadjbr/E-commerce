'use client'
import { useState } from 'react'
import { Menu, X, Search, ShoppingCart, Home, Grid, Tag, Info} from 'lucide-react'
import Hero from './Hero'
import Product from './Product'
import Image from 'next/image'
const HomePage = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Welcome to Our Store</h2>
    <p className="mb-4">Discover our latest products and exclusive offers!</p>
    <Hero/>
    <div className="mt-8">
  <h3 className="text-xl font-semibold mb-4">Featured Categories</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Electronics */}
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <Image
        src={`/3.jpg?height=100&width=200&text=Electronics 1`}
        alt="Electronics"
        width={200}
        height={200}
        className="w-36 h-26 mx-auto mb-2 rounded-xl"
      />
      <p className="font-medium">Electronics</p>
    </div>

    {/* Clothing */}
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <Image
        src={`/4.jpg?height=100&width=200&text=Clothing 2`}
        alt="Clothing"
        width={200}
        height={200}
        className="w-36 h-20 mx-auto mb-2 rounded-xl"
      />
      <p className="font-medium">Clothing</p>
    </div>

    {/* Home & Garden */}
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <Image
        src={`/5.png?height=100&width=200&text=Home & Garden 3`}
        alt="Home & Garden"
        width={200}
        height={200}
        className="w-36 h-20 rounded-xl mx-auto mb-2"
      />
      <p className="font-medium">Home & Garden</p>
    </div>

    {/* Sports */}
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <Image
        src={`/6.jpg?height=100&width=200&text=Sports 4`}
        alt="Sports"
        width={200}
        height={200}
        className="w-36 h-20 rounded-xl mx-auto mb-2"
      />
      <p className="font-medium">Sports</p>
    </div>
  </div>
</div>

  </div>
)

const ProductsPage = () => (
  <div>
   <Product/>
  </div>
)

const CategoriesPage = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Electronics */}
    <div className="bg-white rounded-lg shadow-md p-20 text-center">
      <Image
        src={`/33.jpg?height=100&width=200&text=Electronics 1`}
        alt="Electronics"
        width={200}
        height={200}
        className="w-46 h-26 mx-auto mb-2 rounded-xl"
      />
      <p className="font-medium">Electronics</p>
      <p className="mt-2 text-gray-600">Explore our wide range of Electronics.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            View Products
          </button>
    </div>

    {/* Clothing */}
    <div className="bg-white rounded-lg shadow-md p-20 text-center">
      <Image
        src={`/cloth.jpg?height=100&width=200&text=Electronics 1`}
        alt="Electronics"
        width={200}
        height={200}
        className="w-46 h-26 mx-auto mb-2 rounded-xl"
      />
      <p className="font-medium">Clothing</p>
      <p className="mt-2 text-gray-600">Explore our wide range of Clothing.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            View Products
          </button>
    </div>

    {/* Home & Garden */}
    <div className="bg-white rounded-lg shadow-md p-20 text-center">
      <Image
        src={`/44.jpg?height=100&width=200&text=Electronics 1`}
        alt="Electronics"
        width={200}
        height={200}
        className="w-46 h-26 mx-auto mb-2 rounded-xl"
      />
      <p className="font-medium">Home & Garden</p>
      <p className="mt-2 text-gray-600">Explore our wide range of Home & Garden.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            View Products
          </button>
    </div>

    {/* Sports */}
    <div className="bg-white rounded-lg shadow-md p-20 text-center">
      <Image
        src={`/6.jpg?height=100&width=200&text=Electronics 1`}
        alt="Electronics"
        width={200}
        height={200}
        className="w-46 h-26 mx-auto mb-2 rounded-xl"
      />
      <p className="font-medium">Sports</p>
      <p className="mt-2 text-gray-600">Explore our wide range of Sports.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            View Products
          </button>
    </div>

    <div className="bg-white rounded-lg shadow-md p-20 text-center">
      <Image
        src={`/66.jpg?height=100&width=200&text=Electronics 1`}
        alt="Electronics"
        width={200}
        height={200}
        className="w-46 h-26 mx-auto mb-2 rounded-xl"
      />
      <p className="font-medium">Skincare and cosmetics</p>
      <p className="mt-2 text-gray-600">Explore our wide range of Skincare and cosmetics.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            View Products
          </button>
    </div>

    <div className="bg-white rounded-lg shadow-md p-20 text-center">
      <Image
        src={`/67.jpg?height=100&width=200&text=Electronics 1`}
        alt="Electronics"
        width={200}
        height={200}
        className="w-46 h-30 mx-auto mb-2 rounded-xl"
      />
      <p className="font-medium">Books & Stationery</p>
      <p className="mt-2 text-gray-600">Explore our wide range of Books & Stationery.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            View Products
          </button>
    </div>
  </div>
  </div>
)

const AboutPage = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">About Us</h2>
    <p className="mb-4">
      We are a leading e-commerce platform dedicated to providing high-quality products and exceptional customer service.
      Our mission is to make online shopping easy, enjoyable, and accessible to everyone.
    </p>
    <Image
      src="/team.webp?height=300&width=600&text=Our+Team"
      alt="Our Team"
      width={600}
      height={600}
      className="w-[600px] h-64 object-fill rounded-lg shadow-md mb-4"
    />
    <p className="mb-4">
      Founded in 2024, we've quickly grown to become one of the most trusted online retailers in the industry.
      We offer a wide range of products across multiple categories, ensuring that our customers can find everything they need in one place.
    </p>
    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
    <ul className="list-disc list-inside mb-4">
      <li>Customer Satisfaction</li>
      <li>Quality Products</li>
      <li>Innovative Solutions</li>
      <li>Sustainability</li>
    </ul>
    <p>
      Thank you for choosing us as your preferred online shopping destination. We look forward to serving you and exceeding your expectations.
    </p>
  </div>
)

export default function ECommerceWebsite() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const renderMainContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'products':
        return <ProductsPage />
      case 'categories':
        return <CategoriesPage />
      case 'about':
        return <AboutPage />
      default:
        return <HomePage />
    }
  }

  const navItems = [
    { name: 'Home', icon: Home, page: 'home' },
    { name: 'Products', icon: Grid, page: 'products' },
    { name: 'Categories', icon: Tag, page: 'categories' },
    { name: 'About', icon: Info, page: 'about' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-4 lg:hidden" aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold font-serif">Shahdealsllc</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 w-[500px] mr-[550px] py-2 border-2 rounded-full"
              aria-label="Search"
            />
            <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <button className="relative " aria-label="Shopping cart">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-20`}
        >
          <nav>
            <button onClick={toggleSidebar} className="absolute top-4 right-4 lg:hidden" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${
                  currentPage === item.page ? 'bg-gray-700' : ''
                }`}
                onClick={() => {
                  setCurrentPage(item.page)
                  setSidebarOpen(false)
                }}
              >
                <item.icon className="inline-block mr-2 h-5 w-5" aria-hidden="true" /> {item.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:px-8 overflow-y-auto">
          {renderMainContent()}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 border-t border-gray-700">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">E-Shop is your one-stop destination for all your shopping needs. We offer a wide range of products at competitive prices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300">Shipping Information</a></li>
              <li><a href="#" className="hover:text-gray-300">Returns & Exchanges</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 E-commerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}