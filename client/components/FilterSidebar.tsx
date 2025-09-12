import { Search, Star, Filter, ListChecks, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

export default function FilterSidebar() {
  return (
    <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-gray-900">Filter</h2>
      </div>

      {/* Venue Name Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Venue Name
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Search venues..."
          />
        </div>
      </div>

      {/* Venue Type */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <ListChecks className="w-4 h-4 text-primary" />
          Venue Type
        </h3>
        <div className="space-y-2">
          {[
            'Hotel',
            'Co-working space', 
            'Lounge',
            'Outdoor',
            'Cafe',
            'Women Only'
          ].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <label htmlFor={type} className="text-sm text-gray-700 cursor-pointer">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities & Features */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          Amenities & Features
        </h3>
        <div className="space-y-2">
          {[
            { label: 'Onsite catering', checked: true },
            { label: 'Onsite restaurant', checked: false },
            { label: 'Air Conditioning', checked: false },
            { label: 'Onsite restaurant', checked: false },
            { label: 'Sound system', checked: false },
            { label: 'Projector', checked: false },
            { label: 'Free parking zones', checked: false },
            { label: 'Printing & Scanning', checked: false }
          ].map((amenity) => (
            <div key={amenity.label} className="flex items-center space-x-2">
              <Checkbox id={amenity.label} defaultChecked={amenity.checked} />
              <label htmlFor={amenity.label} className="text-sm text-gray-700 cursor-pointer">
                {amenity.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <Star className="w-4 h-4 text-primary" />
          Rating
        </h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <label htmlFor={`rating-${rating}`} className="flex items-center cursor-pointer">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Filter Button */}
      <Button 
        variant="outline" 
        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
      >
        Reset Filter
      </Button>
    </div>
  );
}
