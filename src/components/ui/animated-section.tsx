
import React from 'react';
import { cn } from '@/lib/utils';
import { useAnimationOnScroll } from '@/hooks/use-animation-on-scroll';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number;
  mobileAnimation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'none';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  mobileAnimation
}) => {
  const { ref, isInView, isMobile } = useAnimationOnScroll({ threshold: 0.1 });
  
  // If mobileAnimation is specified, use it on mobile devices, otherwise use the default animation
  const effectiveAnimation = isMobile && mobileAnimation ? mobileAnimation : animation;

  const getAnimationClass = () => {
    if (isMobile && mobileAnimation === 'none') {
      return isInView ? 'opacity-100' : 'opacity-0';
    }
    
    switch (effectiveAnimation) {
      case 'fade-up':
        return isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'; // Reduced vertical travel on mobile
      case 'fade-left':
        return isInView 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8'; // Reduced horizontal travel on mobile
      case 'fade-right':
        return isInView 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8'; // Reduced horizontal travel on mobile
      case 'zoom-in':
        return isInView 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95'; // Less dramatic scale on mobile
      default:
        return isInView 
          ? 'opacity-100' 
          : 'opacity-0';
    }
  };

  const delayClass = delay > 0 
    ? `delay-[${delay}ms]` 
    : isMobile ? 'delay-[100ms]' : ''; // Use shorter delay on mobile

  return (
    <div
      ref={ref}
      className={cn(
        getAnimationClass(),
        'transition-all',
        isMobile ? 'duration-500' : 'duration-700', // Faster transitions on mobile
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
};
