
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WholesaleForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Wholesale form submitted');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-crystal-800">
          Wholesale Order Inquiry
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">Company Name</label>
            <Input id="company" placeholder="Your company name" required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Contact Person</label>
              <Input id="name" placeholder="Full name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Business Email</label>
              <Input id="email" type="email" placeholder="business@example.com" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <Input id="phone" type="tel" placeholder="Your phone number" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="quantity" className="text-sm font-medium">Monthly Order Quantity</label>
              <Input id="quantity" type="number" placeholder="Estimated bottles per month" required />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Additional Requirements</label>
            <Textarea
              id="message"
              placeholder="Tell us about your specific requirements, delivery preferences, etc."
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full bg-crystal-500 hover:bg-crystal-600">
            Submit Wholesale Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WholesaleForm;
