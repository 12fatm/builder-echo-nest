import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description = "This page is coming soon. Please continue prompting to add content to this page.",
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚧</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Page Under Construction
            </h2>
            <p className="text-gray-600 mb-4">
              This page will be implemented based on your requirements.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
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
}
