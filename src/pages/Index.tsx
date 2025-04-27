import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Package, ShoppingCart, Truck, Building, Users, BriefcaseBusiness } from "lucide-react";
import WholesaleForm from "@/components/WholesaleForm";

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
                Premium Water Solutions <br />
                for Your Business
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                High-quality mineral water sourced from underground aquifers. 
                Perfect for hotels, restaurants, offices, and wholesale distribution.
              </p>
              <Button className="bg-crystal-500 hover:bg-crystal-600 text-white px-8 py-6 text-lg">
                Request Wholesale Pricing <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 animate-ripple border-4 border-crystal-200 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                  alt="Premium Water Bottles"
                  className="relative z-10 mx-auto max-w-md rounded-lg shadow-xl object-cover"
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
            Our Wholesale Product Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bulk Ground Water",
                description: "Pure ground water in 5L bottles, perfect for offices and restaurants.",
                minOrder: "100 units"
              },
              {
                title: "Premium Glass Line",
                description: "Elegant glass bottles for high-end establishments and special events.",
                minOrder: "200 units"
              },
              {
                title: "Eco-Friendly Pack",
                description: "Sustainable packaging options with recycled materials.",
                minOrder: "150 units"
              }
            ].map((product) => (
              <Card key={product.title} className="p-6 hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-crystal-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-sm text-crystal-600">Minimum order: {product.minOrder}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section id="about" className="py-16 md:py-24 bg-crystal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-crystal-900">
            About AquaPure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Building className="w-12 h-12 text-crystal-500 mb-4" />
              <h3 className="text-xl font-bold text-crystal-800 mb-3">Established Excellence</h3>
              <p className="text-gray-600">
                Founded in 2010, AquaPure has been a leading provider of premium ground water solutions 
                for businesses across the region.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="w-12 h-12 text-crystal-500 mb-4" />
              <h3 className="text-xl font-bold text-crystal-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our dedicated team of water quality experts and logistics professionals ensures 
                the highest standards of service and product quality.
              </p>
            </Card>
            <Card className="p-6">
              <BriefcaseBusiness className="w-12 h-12 text-crystal-500 mb-4" />
              <h3 className="text-xl font-bold text-crystal-800 mb-3">Business Focus</h3>
              <p className="text-gray-600">
                Specializing in wholesale water distribution, we serve hotels, restaurants, 
                offices, and large-scale facilities with tailored solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-crystal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-crystal-900">
            Why Choose Us for Wholesale?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Package size={48} className="mx-auto mb-4 text-crystal-500" />
              <h3 className="text-xl font-bold text-crystal-800 mb-2">Bulk Pricing</h3>
              <p className="text-gray-600">Competitive wholesale rates with volume-based discounts.</p>
            </div>
            <div className="text-center p-6">
              <ShoppingCart size={48} className="mx-auto mb-4 text-crystal-500" />
              <h3 className="text-xl font-bold text-crystal-800 mb-2">Flexible Orders</h3>
              <p className="text-gray-600">Customizable order quantities and regular delivery schedules.</p>
            </div>
            <div className="text-center p-6">
              <Truck size={48} className="mx-auto mb-4 text-crystal-500" />
              <h3 className="text-xl font-bold text-crystal-800 mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">Nationwide distribution with dedicated logistics support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Form Section */}
      <section id="wholesale" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-crystal-900">
            Request Wholesale Partnership
          </h2>
          <WholesaleForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
