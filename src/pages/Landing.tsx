import { Button } from "@/components/ui/button";
import { ShoppingCart, Users, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { SHOW_HEADER } from "@/config/debug";
import { fetchCategories } from "@/hooks/use-tender-data";

const Landing = () => {
  const navigate = useNavigate();

  const { data: categoriesData = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const handleCategoryClick = (category: string) => {
    navigate(`/tenders?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {SHOW_HEADER && <Header />}
      
      {/* Hero Section with Banner Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/efca7c09-02a6-4302-a0bf-27458102f2c1.png')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-orange-400 mb-3 uppercase tracking-wider">
              NORGES LEDENDE LEVERANDØRPORTAL
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Coop Tender Portal
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Partner with one of the nation's leading supermarket chains. 
              Access procurement opportunities for fresh produce, packaged goods, and specialty items across our 500+ store locations.
            </p>
            <Link to="/tenders">
              <Button size="lg" className="text-lg px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full">
                Se aktuelle muligheter her!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Store Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25 mrd NOK</div>
              <div className="text-gray-600">Annual Procurement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">Active Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Product Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Partner with Coop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
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
            {categoriesData.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-blue-200"
              >
                <div className="font-medium text-gray-900">{category}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#003366' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Become a Coop Supplier?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our network of trusted suppliers and grow your business with Norway's leading supermarket chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tenders">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Browse Opportunities
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-blue-600 bg-white border-white hover:bg-blue-50">
              Supplier Registration
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
