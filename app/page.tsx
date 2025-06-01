import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-gray-900">Guess</span>
            <span className="text-orange-500">&Grab</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link href="#terms" className="text-gray-600 hover:text-gray-900 transition-colors">
            Terms
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
            FAQ
          </Link>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play"
          >
            <polygon points="5 3 19 12 5 21 5 3" fill="white" />
          </svg>
          Download App
        </Button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Master the art of
              <br />
              <span className="text-orange-500">price prediction.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              A trusted platform where market insight meets opportunity. Test your expertise, predict with precision, and claim quality products.
            </p>

            <div className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex gap-2 w-full">
                  <select className="bg-gray-50 border border-gray-200 text-gray-900 rounded-md px-3 py-2 text-sm">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+86">🇨🇳 +86</option>
                  </select>
                  <Input type="tel" placeholder="Enter your phone number" className="bg-gray-50 border-gray-200 text-gray-900 flex-1" />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get SMS Link
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">We'll send you an SMS with the app download link when we launch.</p>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 z-10 flex justify-center">
            {/* Removed mobile app mockup placeholder */}
          </div>
        </div>

        {/* Background gradient */}
        {/* Removed background gradients for a cleaner look */}
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A structured platform where precision meets opportunity. Join daily challenges and showcase your market expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Download & Create</h3>
              <p className="text-gray-600">
                Get the Guess & Grab app and create your profile to start your prediction journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Enter Challenges</h3>
              <p className="text-gray-600">Participate in daily challenges with a small entry fee. Each challenge features quality products waiting to be claimed.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Predict & Win</h3>
              <p className="text-gray-600">
                Apply your market knowledge, make precise predictions, and claim products when you're right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Guess & Grab</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A trusted platform where market expertise meets opportunity. Not luck, not gambling—pure skill-based prediction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <CheckCircle className="text-orange-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Skill-Based Platform</h3>
                <p className="text-gray-600">
                  Your market knowledge and prediction skills are your greatest assets. No luck, no randomness—just pure expertise.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-orange-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                <p className="text-gray-600">
                  Carefully selected products across various categories. Each challenge features items worth claiming through precise predictions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-orange-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Daily Challenges</h3>
                <p className="text-gray-600">
                  New opportunities every day to test your market insight. Each challenge is a chance to prove your prediction prowess.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-orange-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Growing Community</h3>
                <p className="text-gray-600">
                  Join a community of skilled predictors. Share strategies, track your success rate, and build your reputation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Prediction Journey
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Test Your Market Insight?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of skilled predictors and start claiming products through precise price predictions.
          </p>

          <div className="mt-8">
            <Button className="bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-2 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Download Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">
                <span className="text-gray-900">Guess</span>
                <span className="text-orange-500">&Grab</span>
              </span>
              <p className="text-gray-600 text-sm mt-2">
                © {new Date().getFullYear()} Guess and Grab. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
