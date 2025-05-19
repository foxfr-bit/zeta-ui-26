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
    <div className="flex w-full flex-col self-stretch text-black font-medium leading-[34px] my-auto max-md:max-w-full max-md:mt-10">
      <h3 className="text-[32px] leading-10 mr-[29px] max-md:mr-2.5">
        {title}
      </h3>
      <p className="text-2xl font-normal mt-[23px] max-md:max-w-full">
        {description}
      </p>
      <button 
        className="flex items-stretch gap-[7px] text-base text-[rgba(242,151,3,1)] mt-3.5 hover:text-[rgba(242,151,3,0.8)] transition-colors"
        onClick={() => console.log('Learn more clicked')}
      >
        <span className="grow">Learn more</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e3a8c081a04b858fcd0bc734a24c44acf039b54?placeholderIfAbsent=true"
          alt="Arrow right"
          className="aspect-[1] object-contain w-2.5 shrink-0 my-auto"
        />
      </button>
    </div>
  );

  const imageElement = (
    <img
      src={image}
      alt={title}
      className="aspect-[1.04] object-contain w-full shadow-[0px_0px_15px_6px_rgba(0,0,0,0.08)] grow rounded-[30px] max-md:max-w-full max-md:mt-10"
    />
  );

  return (
    <section className="w-full max-w-[1049px] mt-[167px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {imagePosition === 'left' ? (
          <>
            <div className="w-3/5 max-md:w-full max-md:ml-0">
              {imageElement}
            </div>
            <div className="w-2/5 ml-5 max-md:w-full max-md:ml-0">
              {content}
            </div>
          </>
        ) : (
          <>
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              {content}
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              {imageElement}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
