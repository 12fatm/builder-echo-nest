import { Search, ShoppingCart, Bell, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-extrabold tracking-tight text-primary">
              Attnd
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="/"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Home
            </a>
            <a href="/venues" className="text-primary font-semibold">
              Venues
            </a>
            <a
              href="/suppliers"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Suppliers
            </a>
            <a
              href="/my-events"
              className="text-gray-700 hover:text-primary font-medium"
            >
              My Events
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-primary"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-primary"
            >
              <Bell className="h-5 w-5" />
            </Button>

            {/* User Profile */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 border border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">M</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Mohamed</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>

            {/* Currency */}
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1">
              <span className="text-sm font-medium text-gray-700">£</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
