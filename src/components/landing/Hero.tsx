
import React from 'react';

export const Hero = () => {
  return (
    <section className="w-full max-w-[1190px] mt-8 md:mt-16 lg:mt-[141px] px-4 md:px-8 lg:px-12">
      <div className="gap-5 flex flex-col md:flex-row md:items-stretch">
        <div className="w-full md:w-[46%]">
          <div className="self-stretch my-auto">
            <h1 className="text-black text-3xl md:text-4xl lg:text-[55px] font-medium leading-tight md:leading-[1.2] lg:leading-[61px] tracking-[-0.55px]">
              Effortlessly Manage Your Properties
            </h1>
            <div className="w-full mt-4 md:mt-[7px]">
              <p className="text-black text-lg md:text-xl lg:text-2xl font-normal leading-[1.4]">
                Reliable solutions for all your property needs.
              </p>
              <div className="flex flex-wrap w-full md:w-auto max-w-full items-center gap-4 md:gap-5 mt-6 md:mt-[30px]">
                <button
                  className="bg-[rgba(253,189,84,1)] text-base md:text-xl text-black font-normal leading-[1.4] px-5 md:px-[30px] py-3 md:py-[15px] rounded-xl hover:bg-[rgba(253,189,84,0.9)] transition-colors"
                  onClick={() => console.log('Get Started clicked')}
                >
                  Get Started
                </button>
                <button 
                  className="flex items-center gap-2 text-base md:text-[19px] text-[rgba(242,151,3,1)] font-medium leading-normal md:leading-10 hover:text-[rgba(242,151,3,0.8)] transition-colors"
                  onClick={() => console.log('Learn more clicked')}
                >
                  Learn more
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ede247f311e3d195fb22b9ee1bad507c8e4175?placeholderIfAbsent=true"
                    alt="Arrow right"
                    className="aspect-[1] object-contain w-3 shrink-0 my-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[54%] mt-8 md:mt-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11f54639588db6653932cf57208da471dfdc980?placeholderIfAbsent=true"
            alt="Property Management"
            className="aspect-[1.15] object-contain w-full rounded-[30px] md:rounded-[50px] lg:rounded-[73px]"
          />
        </div>
      </div>
    </section>
  );
};
