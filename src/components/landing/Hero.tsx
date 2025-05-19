import React from 'react';

export const Hero = () => {
  return (
    <section className="w-full max-w-[1190px] ml-[31px] mt-[141px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[46%] max-md:w-full max-md:ml-0">
          <div className="self-stretch my-auto max-md:max-w-full max-md:mt-10">
            <h1 className="text-black text-[55px] font-medium leading-[61px] tracking-[-0.55px] mr-[31px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px] max-md:mr-2.5">
              Effortlessly Manage Your Properties
            </h1>
            <div className="w-full mt-[7px] pl-2 max-md:max-w-full">
              <p className="text-black text-2xl font-normal leading-[1.4] max-md:max-w-full">
                Reliable solutions for all your property needs.
              </p>
              <div className="flex w-[303px] max-w-full items-stretch gap-5 justify-between mt-[30px]">
                <button
                  className="self-stretch bg-[rgba(253,189,84,1)] gap-2.5 text-xl text-black font-normal leading-[1.4] px-[30px] py-[15px] rounded-xl max-md:px-5 hover:bg-[rgba(253,189,84,0.9)] transition-colors"
                  onClick={() => console.log('Get Started clicked')}
                >
                  Get Started
                </button>
                <button 
                  className="flex items-center gap-2 text-[19px] text-[rgba(242,151,3,1)] font-medium leading-10 my-auto hover:text-[rgba(242,151,3,0.8)] transition-colors"
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
        <div className="w-[54%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11f54639588db6653932cf57208da471dfdc980?placeholderIfAbsent=true"
            alt="Property Management"
            className="aspect-[1.15] object-contain w-full grow rounded-[73px] max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};
