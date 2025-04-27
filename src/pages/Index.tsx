
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Droplets, Globe, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-crystal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-crystal-900 mb-6">
                Pure Water, <br />
                Pure Life
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience the pristine purity of nature in every drop. Our mineral water comes directly from protected mountain springs.
              </p>
              <Button className="bg-crystal-500 hover:bg-crystal-600 text-white px-8 py-6 text-lg">
                Discover Our Products <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 animate-ripple border-4 border-crystal-200 rounded-full"></div>
                <img
                  src="/placeholder.svg"
                  alt="Water Bottle"
                  className="relative z-10 mx-auto max-w-md rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-crystal-900">
            Our Premium Water Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Classic", "Sport", "Premium"].map((product) => (
              <Card key={product} className="p-6 hover:shadow-lg transition-shadow">
                <img
                  src="/placeholder.svg"
                  alt={`${product} Bottle`}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-crystal-800 mb-2">{product} Collection</h3>
                <p className="text-gray-600 mb-4">Pure mountain spring water in our signature {product.toLowerCase()} bottle design.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-crystal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-crystal-900">
            Why Choose AquaPure?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Droplets size={48} className="mx-auto mb-4 text-crystal-500" />
              <h3 className="text-xl font-bold text-crystal-800 mb-2">Natural Minerals</h3>
              <p className="text-gray-600">Rich in essential minerals that your body needs for optimal health.</p>
            </div>
            <div className="text-center p-6">
              <Shield size={48} className="mx-auto mb-4 text-crystal-500" />
              <h3 className="text-xl font-bold text-crystal-800 mb-2">Pure & Safe</h3>
              <p className="text-gray-600">Rigorous quality control ensures the highest standards of purity.</p>
            </div>
            <div className="text-center p-6">
              <Globe size={48} className="mx-auto mb-4 text-crystal-500" />
              <h3 className="text-xl font-bold text-crystal-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable packaging and responsible sourcing practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-crystal-900">
            Get In Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crystal-500 focus:ring-crystal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crystal-500 focus:ring-crystal-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crystal-500 focus:ring-crystal-500"
                ></textarea>
              </div>
              <Button className="w-full bg-crystal-500 hover:bg-crystal-600">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
