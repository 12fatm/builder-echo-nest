import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';

export default function SearchBar() {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Location */}
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="All Khobar Business Halls"
            className="flex-1 outline-none text-gray-700 placeholder-gray-500"
            defaultValue="All Khobar Business Halls"
          />
        </div>

        {/* Date From */}
        <div className="flex items-center gap-2 flex-1">
          <Calendar className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="24 Jul 2024 - 17:00 PM"
            className="flex-1 outline-none text-gray-700 placeholder-gray-500"
            defaultValue="24 Jul 2024 - 17:00 PM"
          />
        </div>

        {/* Date To */}
        <div className="flex items-center gap-2 flex-1">
          <Calendar className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="24 Jul 2024 - 17:00 PM"
            className="flex-1 outline-none text-gray-700 placeholder-gray-500"
            defaultValue="24 Jul 2024 - 17:00 PM"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 flex-1">
          <Users className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="200"
            className="flex-1 outline-none text-gray-700 placeholder-gray-500"
            defaultValue="200"
          />
        </div>

        {/* Search Button */}
        <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
}
