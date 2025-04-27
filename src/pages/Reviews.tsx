
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Star } from "lucide-react";

const Reviews = () => {
  // Sample reviews data - in a real app, this would come from a database
  const reviews = [
    {
      id: 1,
      customerName: "John Smith",
      company: "Grand Hotel Chain",
      rating: 5,
      text: "Excellent quality ground water. Our hotel guests love it.",
      date: "2025-03-15"
    },
    {
      id: 2,
      customerName: "Sarah Johnson",
      company: "Fresh Foods Restaurant",
      rating: 4,
      text: "Reliable delivery and great customer service.",
      date: "2025-03-10"
    },
    {
      id: 3,
      customerName: "Michael Chen",
      company: "Office Solutions Inc",
      rating: 5,
      text: "Best wholesale water supplier we've worked with.",
      date: "2025-03-05"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-crystal-900 mb-6">
              Customer Reviews
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              See what our wholesale customers say about our ground water products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="mt-4">
                  <p className="font-semibold text-crystal-800">{review.customerName}</p>
                  <p className="text-sm text-gray-600">{review.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-crystal-500 hover:bg-crystal-600 text-white px-8 py-6 text-lg">
              Submit Your Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
