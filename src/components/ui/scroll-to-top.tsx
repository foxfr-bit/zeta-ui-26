
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed z-50 p-2 md:p-3 bg-[rgba(253,189,84,1)] rounded-full shadow-lg transition-all duration-300 hover:bg-[rgba(230,168,74,1)]',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
        isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className={cn('text-black', isMobile ? 'h-5 w-5' : 'h-6 w-6')} />
    </button>
  );
};
