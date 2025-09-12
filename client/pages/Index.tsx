import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import VenueCard from '../components/VenueCard';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const mockVenues = [
  {
    id: 1,
    name: "Diamond Ballroom",
    rating: 5.0,
    location: "Crowne Plaza Jeddah Al Salam",
    size: "444.4 sq. m",
    capacity: 250,
    price: 200,
    currency: "JD",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Diamond Ballroom",
    rating: 5.0,
    location: "Crowne Plaza Jeddah Al Salam", 
    size: "444.4 sq. m",
    capacity: 250,
    price: 200,
    currency: "JD",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Diamond Ballroom",
    rating: 5.0,
    location: "Crowne Plaza Jeddah Al Salam",
    size: "444.4 sq. m", 
    capacity: 250,
    price: 200,
    currency: "JD",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Diamond Ballroom",
    rating: 5.0,
    location: "Crowne Plaza Jeddah Al Salam",
    size: "444.4 sq. m",
    capacity: 250,
    price: 200,
    currency: "JD", 
    image: "/placeholder.svg"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SearchBar />
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <span>Venue</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span>Listing</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-medium">Details</span>
        </nav>

        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className="hidden lg:block flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-[rgba(245,245,247,0.8)] px-4 py-3 flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">
                Showing 5 of 20 Results
              </h1>
              <Button variant="outline" className="flex items-center gap-2">
                Sort by
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Venue Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
              {mockVenues.map((venue) => (
                <VenueCard
                  key={venue.id}
                  name={venue.name}
                  rating={venue.rating}
                  location={venue.location}
                  size={venue.size}
                  capacity={venue.capacity}
                  price={venue.price}
                  currency={venue.currency}
                  image={venue.image}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4 rotate-180" />
              </Button>
              
              <Button className="bg-primary text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">4</Button>
              <Button variant="outline">5</Button>
              
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
