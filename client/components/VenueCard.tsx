import { Star, MapPin, Maximize, Users } from "lucide-react";
import { Button } from "./ui/button";

interface VenueCardProps {
  name: string;
  rating: number;
  location: string;
  size: string;
  capacity: number;
  price: number;
  currency: string;
  image: string;
}

export default function VenueCard({
  name,
  rating,
  location,
  size,
  capacity,
  price,
  currency,
  image,
}: VenueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-gray-600 mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Details */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{size}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{capacity}</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">
              {price} {currency}
            </span>
            <span className="text-sm text-gray-500 ml-1">Person/Hour</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
