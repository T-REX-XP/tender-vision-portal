
import { Button } from "@/components/ui/button";
import { Building2, Search, FileText, Award, ShoppingCart, Users, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const categories = [
    "Fresh Produce", "Dairy & Refrigerated", "Meat & Seafood", "Bakery & Deli",
    "Packaged Foods", "Beverages", "Health & Beauty", "Household Items"
  ];

  const handleCategoryClick = (category: string) => {
    navigate(`/tenders?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with Background Image */}
      <section 
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            FreshMart Supplier Portal
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Partner with one of the nation's leading supermarket chains. 
            Access procurement opportunities for fresh produce, packaged goods, and specialty items across our 500+ store locations.
          </p>
          <Link to="/tenders">
            <Button size="lg" className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700">
              View Current Opportunities
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Store Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$2.5B</div>
              <div className="text-gray-600">Annual Procurement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600">Active Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Product Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Partner with FreshMart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Reach</h3>
              <p className="text-gray-600">
                Supply to 500+ stores across the country with guaranteed volume commitments and growth opportunities.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Streamlined Logistics</h3>
              <p className="text-gray-600">
                Benefit from our advanced distribution network and efficient supply chain management systems.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-term Partnerships</h3>
              <p className="text-gray-600">
                Build lasting relationships with dedicated category managers and transparent procurement processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Procurement Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-green-200"
              >
                <div className="font-medium text-gray-900">{category}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Become a FreshMart Supplier?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our network of trusted suppliers and grow your business with America's favorite supermarket.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tenders">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Browse Opportunities
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-green-600">
              Supplier Registration
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
