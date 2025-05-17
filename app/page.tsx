import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-white">Guess</span>
            <span className="text-orange-500">&Grab</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#terms" className="text-gray-300 hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2">
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
              Guess the price.
              <br />
              <span className="text-orange-500">Grab the product.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-md">
              The exciting new game where your price predictions can win you amazing products at unbelievable discounts.
            </p>

            <div className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap">
                  Join Waitlist
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">Be the first to know when we launch. No spam, ever.</p>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 z-10 flex justify-center">
            <div className="relative">
              <div className="relative w-[300px] h-[600px] bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>

        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Guess and Grab is simple to play but hard to master. Test your knowledge and win big!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Download the App</h3>
              <p className="text-gray-400">
                Get the Guess and Grab app on your mobile device from Google Play or App Store.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Guess the Price</h3>
              <p className="text-gray-400">Browse products and make your best guess on their retail price.</p>
            </div>

            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Win & Grab</h3>
              <p className="text-gray-400">
                Make accurate guesses to win products at incredible discounts or even for free!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Guess & Grab</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We're not just another shopping app. We're revolutionizing how you get the products you love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="text-orange-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Products</h3>
                <p className="text-gray-400">Only the best brands and products make it to our platform.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-orange-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Massive Discounts</h3>
                <p className="text-gray-400">Get up to 80% off retail prices when you guess correctly.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-orange-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Daily Challenges</h3>
                <p className="text-gray-400">New products and opportunities to win every single day.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-orange-500 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Invite Friends</h3>
                <p className="text-gray-400">Earn bonus points when you invite friends to join the platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black to-orange-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start guessing and grabbing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of smart shoppers who are already winning big on Guess and Grab.
          </p>

          <div className="mt-8">
            <Button className="bg-white text-black hover:bg-gray-200 flex items-center gap-2">
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">
                <span className="text-white">Guess</span>
                <span className="text-orange-500">&Grab</span>
              </span>
              <p className="text-gray-400 text-sm mt-2">
                © {new Date().getFullYear()} Guess and Grab. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
