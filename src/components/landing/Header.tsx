
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex w-full max-w-[1275px] items-center gap-5 font-normal leading-[1.4] flex-wrap justify-between px-4 md:px-6 lg:px-0">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9690298b4295abdafb845c844373f837834a4d72?placeholderIfAbsent=true"
        alt="Zeta Logo"
        className="aspect-[2.48] object-contain w-[120px] md:w-[139px] self-stretch shrink-0"
      />
      
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button 
          onClick={toggleMenu} 
          className="p-2 text-black"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Desktop navigation */}
      <div className="hidden lg:flex self-stretch gap-[40px_48px] text-base text-black my-auto">
        <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
        <a href="#about" className="hover:text-gray-600 transition-colors">About Us</a>
        <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
        <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
      </div>
      
      {/* Desktop auth buttons */}
      <div className="hidden lg:flex self-stretch items-stretch text-sm my-auto">
        <button
          className="self-stretch z-10 gap-2.5 text-black whitespace-nowrap px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => console.log('Login clicked')}
        >
          Login
        </button>
        <button
          className="self-stretch bg-black gap-2.5 text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          onClick={() => console.log('Sign Up clicked')}
        >
          Sign Up
        </button>
      </div>
      
      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white pt-20 pb-6 px-6">
          <div className="flex flex-col space-y-4 text-lg">
            <a 
              href="#home" 
              className="py-2 border-b border-gray-100 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="py-2 border-b border-gray-100 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#services" 
              className="py-2 border-b border-gray-100 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="py-2 border-b border-gray-100 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            <div className="flex flex-col pt-4 space-y-3">
              <button
                className="w-full text-center text-black py-3 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                onClick={() => {
                  console.log('Login clicked');
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </button>
              <button
                className="w-full text-center bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
                onClick={() => {
                  console.log('Sign Up clicked');
                  setMobileMenuOpen(false);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
