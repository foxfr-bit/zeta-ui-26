
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-md' 
        : 'bg-white border-b border-transparent'
    }`}>
      <nav className="flex w-full max-w-[1275px] mx-auto items-center gap-5 font-normal leading-[1.4] flex-wrap justify-between px-2 md:px-3 lg:px-4 py-4">
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
          {mobileMenuOpen ? (
            <X size={24} className="transition-colors" style={{ color: '#FDBD54' }} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
      
      {/* Desktop navigation */}
      <div className="hidden lg:flex self-stretch gap-[40px_48px] text-base text-black my-auto">
        <button onClick={() => navigate('/home')} className="hover:text-gray-600 transition-colors">Home</button>
        <a href="#about" className="hover:text-gray-600 transition-colors">About Us</a>
        <button onClick={() => navigate('/services')} className="hover:text-gray-600 transition-colors">Services</button>
        <button onClick={() => navigate('/contact')} className="hover:text-gray-600 transition-colors">Contact</button>
      </div>
      
      {/* Desktop auth buttons */}
      <div className="hidden lg:flex self-stretch items-stretch text-sm my-auto">
        <button
          className="self-stretch z-10 gap-2.5 text-black whitespace-nowrap px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="self-stretch bg-black gap-2.5 text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          onClick={() => navigate('/onboarding')}
        >
          Sign Up
        </button>
      </div>
      
      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white pt-20 pb-6 px-6">
          <div className="flex flex-col space-y-4 text-lg">
            <button 
              className="py-2 border-b border-gray-100 hover:text-gray-600 transition-colors text-left"
              onClick={() => {
                navigate('/home');
                setMobileMenuOpen(false);
              }}
            >
              Home
            </button>
            <a 
              href="#about" 
              className="py-2 border-b border-gray-100 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <button 
              className="py-2 border-b border-gray-100 hover:text-gray-600 transition-colors text-left"
              onClick={() => {
                navigate('/services');
                setMobileMenuOpen(false);
              }}
            >
              Services
            </button>
            <button 
              className="py-2 border-b border-gray-100 hover:text-gray-600 transition-colors text-left"
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </button>
            
            <div className="flex flex-col pt-4 space-y-3">
              <button
                className="w-full text-center text-black py-3 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </button>
              <button
                className="w-full text-center bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
                onClick={() => {
                  navigate('/onboarding');
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
    </header>
  );
};
