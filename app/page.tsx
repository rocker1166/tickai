"use client"
import React, { useState } from 'react';
import { Camera, Ticket, MessageCircle, DollarSign, Menu, X } from 'lucide-react';
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-black">
      <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
  <h1 className="text-2xl font-bold text-blue-600">AI Ticketing</h1>
  <nav className="hidden md:flex items-center space-x-4 ">
    <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
    <a href="#" className="text-gray-600 hover:text-blue-600">Support</a>

    <SignedOut>
      <div className="flex items-center space-x-2">
        <a href="/sign-in" className="text-blue-600 border border-blue-600 rounded px-3 py-2">Login</a>
        <a href="/sign-up" className="bg-blue-600 text-white rounded px-3 py-2">Sign Up</a>
      </div>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </nav>
  <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-blue-600">
    {menuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>
        {menuOpen && (
          <nav className="md:hidden bg-white px-4 py-2">
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">About</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">Support</a>
            <SignedOut>
            <a href="/sign-in" className="block text-blue-600 border border-blue-600 rounded px-3 py-2 mt-2">Login</a>
            <a href="/sign-up" className="block bg-blue-600 text-white rounded px-3 py-2 mt-2">Sign Up</a>
            </SignedOut>
            <SignedIn>
            <UserButton />
          </SignedIn>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionize Your Ticketing with AI</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Streamline operations and enhance visitor experience for museums, zoos, and more.</p>
          <a href="/dashboard" className="inline-block bg-blue-600 text-white text-lg font-semibold rounded px-6 py-3 md:px-8 md:py-4 hover:bg-blue-700 transition duration-300">Get Started</a>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<Camera className="w-12 h-12 text-blue-500" />}
            title="Custom Chatbot"
            description="Personalize your AI assistant to match your brand and visitor needs."
          />
          <FeatureCard
            icon={<Ticket className="w-12 h-12 text-green-500" />}
            title="Smart Ticketing"
            description="Effortlessly manage tickets, prices, and availability in real-time."
          />
          <FeatureCard
            icon={<MessageCircle className="w-12 h-12 text-purple-500" />}
            title="24/7 Support"
            description="AI-powered chatbot answers questions and books tickets around the clock."
          />
          <FeatureCard
            icon={<DollarSign className="w-12 h-12 text-yellow-500" />}
            title="Financial Insights"
            description="Track sales, manage transactions, and request payouts with ease."
          />
        </section>

        <section className="bg-blue-50 rounded-lg p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to transform your ticketing experience?</h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">Join hundreds of institutions already using AI Ticketing to boost efficiency and visitor satisfaction.</p>
          <a href="#" className="inline-block bg-blue-600 text-white text-lg font-semibold rounded px-6 py-3 md:px-8 md:py-4 hover:bg-blue-700 transition duration-300">Sign Up Now</a>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2024 AI Ticketing. All rights reserved.</p>
            <nav className="flex flex-col md:flex-row">
              <a href="#" className="text-blue-600 hover:underline mb-2 md:mb-0 md:mr-4">Terms of Service</a>
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description } : any) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    </div>
    <p className="mt-4 text-center text-gray-600">{description}</p>
  </div>
);

export default LandingPage;