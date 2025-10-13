
import React from 'react';

interface ProductFeatureProps {
  label?: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({
  label,
  title,
  description,
  image,
  imagePosition = 'left'
}) => {
  const content = (
    <div className="flex flex-col justify-center">
      {label && (
        <div className="text-[#F29703] text-base font-medium mb-4">
          {label}
        </div>
      )}
      <h2 className="text-black text-2xl font-bold leading-tight mb-6">
        {title}
      </h2>
      <p className="text-black text-lg md:text-xl leading-relaxed mb-6">
        {description}
      </p>
      <button 
        className="flex items-center gap-2 text-[#F29703] text-base font-medium hover:text-[#e08a02] transition-colors group w-fit"
        onClick={() => console.log('Learn more clicked')}
      >
        <span>Learn more</span>
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );

  const imageElement = (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-contain rounded-[30px]"
      />
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-2 md:px-4 pt-40 md:pt-40 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {imagePosition === 'left' ? (
          <>
            <div className="order-2 lg:order-1">
              {imageElement}
            </div>
            <div className="order-1 lg:order-2">
              {content}
            </div>
          </>
        ) : (
          <>
            <div className="order-1">
              {content}
            </div>
            <div className="order-2">
              {imageElement}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
