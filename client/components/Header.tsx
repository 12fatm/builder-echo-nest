import { Search, ShoppingCart, Bell, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="Attnd home">
            <Logo size="md" />
          </a>

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
          <div className="flex items-center gap-3">
            {/* Cart */}
            <div className="w-10 h-10 bg-[#F4F1FF] rounded-full flex items-center justify-center hover:bg-[#E8E3FF] transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" fill="#5007C5"/>
                <path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" fill="#5007C5"/>
                <path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="#5007C5"/>
                <path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="url(#paint0_linear_cart)"/>
                <defs>
                  <linearGradient id="paint0_linear_cart" x1="15" y1="7.25" x2="15" y2="8.75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#560AD0"/>
                    <stop offset="1" stopColor="#360882"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Notifications */}
            <div className="w-10 h-10 bg-[#F4F1FF] rounded-full flex items-center justify-center hover:bg-[#E8E3FF] transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 10.5204C11.59 10.5204 11.25 10.1804 11.25 9.77043V6.44043C11.25 6.03043 11.59 5.69043 12 5.69043C12.41 5.69043 12.75 6.03043 12.75 6.44043V9.77043C12.75 10.1904 12.41 10.5204 12 10.5204Z" fill="#5007C5"/>
                <path d="M12.0199 20.3502C9.43987 20.3502 6.86987 19.9402 4.41987 19.1202C3.50987 18.8202 2.81987 18.1702 2.51987 17.3502C2.21987 16.5302 2.31987 15.5902 2.80987 14.7702L4.07987 12.6502C4.35987 12.1802 4.60987 11.3002 4.60987 10.7502V8.65023C4.60987 4.56023 7.92987 1.24023 12.0199 1.24023C16.1099 1.24023 19.4299 4.56023 19.4299 8.65023V10.7502C19.4299 11.2902 19.6799 12.1802 19.9599 12.6502L21.2299 14.7702C21.6999 15.5502 21.7799 16.4802 21.4699 17.3302C21.1599 18.1802 20.4799 18.8302 19.6199 19.1202C17.1699 19.9502 14.5999 20.3502 12.0199 20.3502ZM12.0199 2.75023C8.75987 2.75023 6.10987 5.40023 6.10987 8.66023V10.7602C6.10987 11.5702 5.78987 12.7402 5.36987 13.4302L4.09987 15.5602C3.83987 15.9902 3.77987 16.4502 3.92987 16.8502C4.07987 17.2502 4.41987 17.5502 4.89987 17.7102C9.49987 19.2402 14.5599 19.2402 19.1599 17.7102C19.5899 17.5702 19.9199 17.2502 20.0699 16.8302C20.2299 16.4102 20.1799 15.9502 19.9499 15.5602L18.6799 13.4402C18.2599 12.7502 17.9399 11.5802 17.9399 10.7702V8.67023C17.9299 5.40023 15.2799 2.75023 12.0199 2.75023Z" fill="#5007C5"/>
                <path d="M11.9999 22.9003C10.9299 22.9003 9.87992 22.4603 9.11992 21.7003C8.35992 20.9403 7.91992 19.8903 7.91992 18.8203H9.41992C9.41992 19.5003 9.69992 20.1603 10.1799 20.6403C10.6599 21.1203 11.3199 21.4003 11.9999 21.4003C13.4199 21.4003 14.5799 20.2403 14.5799 18.8203H16.0799C16.0799 21.0703 14.2499 22.9003 11.9999 22.9003Z" fill="#5007C5"/>
              </svg>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#173D7A] flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Mohamed" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-base font-bold text-[#2D2D2D] font-sans">Mohamed</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00001 11.2004C7.53335 11.2004 7.06668 11.0204 6.71335 10.6671L2.36668 6.32042C2.17335 6.12708 2.17335 5.80708 2.36668 5.61375C2.56001 5.42042 2.88001 5.42042 3.07335 5.61375L7.42001 9.96042C7.74001 10.2804 8.26001 10.2804 8.58001 9.96042L12.9267 5.61375C13.12 5.42042 13.44 5.42042 13.6333 5.61375C13.8267 5.80708 13.8267 6.12708 13.6333 6.32042L9.28668 10.6671C8.93335 11.0204 8.46668 11.2004 8.00001 11.2004Z" fill="url(#paint0_linear_arrow)"/>
                  <defs>
                    <linearGradient id="paint0_linear_arrow" x1="8.00001" y1="5.46875" x2="8.00001" y2="11.2004" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#560AD0"/>
                      <stop offset="1" stopColor="#360882"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center justify-center h-10 px-3 rounded-lg border border-[#D44C39] hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-sm font-normal text-[#1A1A1A]">ع</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
