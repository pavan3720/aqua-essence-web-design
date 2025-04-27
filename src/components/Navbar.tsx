
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-crystal-600 text-2xl font-bold">AquaPure</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-crystal-500">Home</a>
            <a href="#products" className="text-gray-600 hover:text-crystal-500">Products</a>
            <a href="#about" className="text-gray-600 hover:text-crystal-500">About</a>
            <a href="#benefits" className="text-gray-600 hover:text-crystal-500">Benefits</a>
            <Button variant="default" className="bg-crystal-500 hover:bg-crystal-600">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-crystal-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-600 hover:text-crystal-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-gray-600 hover:text-crystal-500"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-crystal-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 text-gray-600 hover:text-crystal-500"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <Button
                variant="default"
                className="w-full bg-crystal-500 hover:bg-crystal-600"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
