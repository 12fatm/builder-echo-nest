import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-x-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.location.href = '/'}
            >
              Go Home
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
