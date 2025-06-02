"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DownloadAppPopup from "@/components/DownloadAppPopup"
import { useState } from "react"

export default function LandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <body className="bg-white m-0 p-0">
      <div className="flex flex-col min-h-screen text-gray-900 font-sans bg-white">
        {/* Header */}
        <header className="container mx-auto py-4 px-4 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-gray-900">Guess</span>
                <span className="text-orange-500">&Grab</span>
              </span>
            </Link>
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
          <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={openPopup}
          >
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
        <section className="flex-1 relative overflow-hidden bg-gradient-to-br from-orange-50 to-white py-12 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 z-10 space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-800">
                Master the art of
                <br />
                <span className="text-orange-600">price prediction.</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-md leading-relaxed">
                A trusted platform where market insight meets opportunity. Test your expertise, predict with precision, and claim quality products.
              </p>

              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Download Guess&Grab app</h2>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <div className="flex flex-1 rounded-full overflow-hidden bg-gray-50 items-center border border-gray-300 focus-within:border-t-transparent focus-within:border-l-transparent focus-within:border-r-transparent focus-within:border-b-2 focus-within:border-orange-600 transition-colors relative">
                    <select className="bg-transparent text-gray-800 pl-4 pr-2 py-3 text-base focus:outline-none w-20 appearance-none border-r border-gray-300 flex-shrink-0" defaultValue="+91">
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+86">🇨🇳 +86</option>
                    </select>
                    <Input type="tel" placeholder="Enter Mobile Number" className="bg-transparent text-gray-800 flex-1 px-4 py-3 text-base focus:outline-none! focus:ring-0! focus:ring-offset-0! focus:outline-transparent! focus:border-transparent! focus:shadow-none! placeholder-gray-500 border-none" style={{ outline: 'none', border: 'none', boxShadow: 'none' }} />
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white whitespace-nowrap rounded-full px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    GET LINK
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center sm:text-left">We'll send you an SMS with the app download link.</p>
              </div>
            </div>

            <div className="md:w-1/2 mt-16 md:mt-0 z-10 flex justify-center">
              {/* Removed mobile app mockup placeholder */}
            </div>
          </div>

          {/* Background gradient */}
          {/* Removed background gradients for a cleaner look */}
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-gradient-to-tr from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">How It Works</h2>
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
                A structured platform where precision meets opportunity. Join daily challenges and showcase your market expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mb-6">
                  <span className="font-bold text-2xl text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Download & Create</h3>
                <p className="text-gray-600 text-base">
                  Get the Guess & Grab app and create your profile to start your prediction journey.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mb-6">
                  <span className="font-bold text-2xl text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Enter Challenges</h3>
                <p className="text-gray-600 text-base">Participate in daily challenges with a small entry fee. Each challenge features quality products waiting to be claimed.</p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mb-6">
                  <span className="font-bold text-2xl text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Predict & Win</h3>
                <p className="text-gray-600 text-base">
                  Apply your market knowledge, make precise predictions, and claim products when you're right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 bg-gradient-to-bl from-white to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Why Choose Guess & Grab</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                A trusted platform where market expertise meets opportunity. Not luck, not gambling—pure skill-based prediction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle className="text-orange-600 h-7 w-7 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Skill-Based Platform</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Your market knowledge and prediction skills are your greatest assets. No luck, no randomness—just pure expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-orange-600 h-7 w-7 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Quality Products</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Carefully selected products across various categories. Each challenge features items worth claiming through precise predictions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-orange-600 h-7 w-7 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Daily Challenges</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    New opportunities every day to test your market insight. Each challenge is a chance to prove your prediction prowess.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-orange-600 h-7 w-7 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Growing Community</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Join a community of skilled predictors. Share strategies, track your success rate, and build your reputation.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={openPopup}
              >
                Start Your Prediction Journey
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Ready to Test Your Market Insight?</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our growing community of skilled predictors and start claiming quality products through precise price predictions.
            </p>

            <div className="mt-8">
              <Button className="bg-orange-600 text-white hover:bg-orange-700 flex items-center gap-2 rounded-full px-8 py-4 text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={openPopup}
              >
                Download Now <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-200 py-8 text-gray-600 text-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-2xl font-bold">
                  <span className="text-gray-900">Guess</span>
                  <span className="text-orange-600">&Grab</span>
                </span>
                <p className="text-sm mt-2">
                  © {new Date().getFullYear()} Guess and Grab. All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="#" className="hover:text-gray-900 transition-colors" onClick={openPopup}>
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-gray-900 transition-colors" onClick={openPopup}>
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-gray-900 transition-colors" onClick={openPopup}>
                  Contact Us
                </Link>
                <Link href="#" className="hover:text-gray-900 transition-colors" onClick={openPopup}>
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Download App Popup */}
        <DownloadAppPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </body>
  )
}
