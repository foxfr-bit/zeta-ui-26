
import React from 'react';

interface ProductFeatureProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({
  title,
  description,
  image,
  imagePosition = 'left'
}) => {
  const content = (
    <div className="flex w-full flex-col self-stretch text-black font-medium my-auto">
      <h3 className="text-2xl md:text-[28px] lg:text-[32px] leading-tight md:leading-10">
        {title}
      </h3>
      <p className="text-lg md:text-xl lg:text-2xl font-normal mt-4 md:mt-[23px]">
        {description}
      </p>
      <button 
        className="flex items-stretch gap-[7px] text-sm md:text-base text-[rgba(242,151,3,1)] mt-3 md:mt-3.5 hover:text-[rgba(242,151,3,0.8)] transition-colors group"
        onClick={() => console.log('Learn more clicked')}
      >
        <span className="grow">Learn more</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e3a8c081a04b858fcd0bc734a24c44acf039b54?placeholderIfAbsent=true"
          alt="Arrow right"
          className="aspect-[1] object-contain w-2.5 shrink-0 my-auto transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );

  const imageElement = (
    <img
      src={image}
      alt={title}
      className="aspect-[1.04] object-contain w-full shadow-[0px_0px_10px_4px_rgba(0,0,0,0.06)] md:shadow-[0px_0px_15px_6px_rgba(0,0,0,0.08)] grow rounded-[20px] md:rounded-[30px] hover:shadow-[0px_0px_20px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300"
    />
  );

  return (
    <section className="w-full max-w-[1049px] mt-16 md:mt-24 lg:mt-[167px] px-4 md:px-6 lg:px-0">
      <div className="gap-8 md:gap-5 flex flex-col md:flex-row">
        {imagePosition === 'left' ? (
          <>
            <div className="w-full md:w-3/5">
              {imageElement}
            </div>
            <div className="w-full md:w-2/5">
              {content}
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-6/12 order-2 md:order-1">
              {content}
            </div>
            <div className="w-full md:w-6/12 order-1 md:order-2">
              {imageElement}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
