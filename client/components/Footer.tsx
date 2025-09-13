import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#F6F3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand */}
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>

        {/* Links Row */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-700 mb-8">
          <a href="/create-event" className="hover:text-primary">Create Event</a>
          <a href="/venue" className="hover:text-primary">Venue</a>
          <a href="/suppliers" className="hover:text-primary">Suppliers</a>
          <a href="/about" className="hover:text-primary">About us</a>
          <a href="/terms" className="hover:text-primary">Terms & conditions</a>
          <a href="/help" className="hover:text-primary">Help & FAQs</a>
          <a href="/contact" className="hover:text-primary">Contact us</a>
        </nav>

        {/* Payments */}
        <div className="flex justify-center items-center gap-3 mb-10">
          <span className="px-3 py-1 rounded-md bg-white border text-xs font-semibold text-gray-700">VISA</span>
          <span className="px-3 py-1 rounded-md bg-white border text-xs font-semibold text-gray-700">Mastercard</span>
          <span className="px-3 py-1 rounded-md bg-white border text-xs font-semibold text-gray-700">mada</span>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span>CR: 1009904329</span>
              <span>VAT: 310544830000003</span>
            </div>
            <div className="text-center">©2024 founded - All Rights Reserved</div>
            <div className="flex items-center gap-4 text-gray-400">
              <a aria-label="twitter" href="#" className="hover:text-gray-600">•</a>
              <a aria-label="linkedin" href="#" className="hover:text-gray-600">•</a>
              <a aria-label="instagram" href="#" className="hover:text-gray-600">•</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
