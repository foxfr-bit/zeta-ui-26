
import React from 'react';
import { cn } from '@/lib/utils';
import { useAnimationOnScroll } from '@/hooks/use-animation-on-scroll';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0
}) => {
  const { ref, isInView } = useAnimationOnScroll({ threshold: 0.1 });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16';
      case 'fade-left':
        return isInView 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-16';
      case 'fade-right':
        return isInView 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-16';
      case 'zoom-in':
        return isInView 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-90';
      default:
        return isInView 
          ? 'opacity-100' 
          : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        getAnimationClass(),
        'transition-all duration-700',
        delay && `delay-[${delay}ms]`,
        className
      )}
    >
      {children}
    </div>
  );
};
