import { Search, MapPin, Calendar, Users, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';

export default function SearchBar() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-3 md:p-4 mb-6 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Location */}
        <div className="flex-1">
          <div className="flex items-center gap-2 h-12 rounded-lg border border-gray-200 px-4 bg-white">
            <MapPin className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Al Khobar Business Halls"
              className="flex-1 outline-none text-gray-700 placeholder-gray-500 bg-transparent"
              defaultValue="All Khobar Business Halls"
            />
          </div>
        </div>

        <div className="hidden lg:block w-px h-8 bg-gray-200" />

        {/* Date From */}
        <div className="flex-1">
          <div className="flex items-center gap-2 h-12 rounded-lg border border-gray-200 px-4 bg-white">
            <Calendar className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="24 Jul 2024 - 17:00 PM"
              className="flex-1 outline-none text-gray-700 placeholder-gray-500 bg-transparent"
              defaultValue="24 Jul 2024 - 17:00 PM"
            />
          </div>
        </div>

        <div className="hidden lg:block w-px h-8 bg-gray-200" />

        {/* Date To */}
        <div className="flex-1">
          <div className="flex items-center gap-2 h-12 rounded-lg border border-gray-200 px-4 bg-white">
            <Calendar className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="24 Jul 2024 - 17:00 PM"
              className="flex-1 outline-none text-gray-700 placeholder-gray-500 bg-transparent"
              defaultValue="24 Jul 2024 - 17:00 PM"
            />
          </div>
        </div>

        <div className="hidden lg:block w-px h-8 bg-gray-200" />

        {/* Guests */}
        <div className="flex-1">
          <div className="flex items-center gap-2 h-12 rounded-lg border border-gray-200 px-4 bg-white">
            <Users className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="200"
              className="flex-1 outline-none text-gray-700 placeholder-gray-500 bg-transparent"
              defaultValue="200"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <Button className="h-12 px-5 bg-primary hover:bg-primary/90 text-white rounded-lg">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" className="h-12 w-12 p-0 rounded-lg border-gray-300">
            <SlidersHorizontal className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
      </div>
    </div>
  );
}
