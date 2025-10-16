import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  const handleResourceClick = (item: string) => {
    if (item === 'Help Center') {
      navigate('/help-center');
    } else {
      // Handle other resource links here
      console.log(`Clicked on: ${item}`);
    }
  };

  const handleAboutClick = (item: string) => {
    if (item === 'Our Story') {
      navigate('/about');
    } else {
      // Handle other about links here
      console.log(`Clicked on: ${item}`);
    }
  };

  return (
    <footer className="bg-[rgba(241,235,222,1)] self-stretch flex w-full flex-col items-center pt-10 md:pt-[50px] pb-6 md:pb-[31px]">
      <div className="w-full max-w-[1261px] px-2 md:px-3 lg:px-4">
        <div className="gap-8 md:gap-5 flex flex-col md:flex-row">
          <div className="w-full md:w-[40%] md:grid-cols-1 gap-x-4">
            <div className="text-base text-black font-light leading-[1.6] md:leading-[27px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c439c0acd447c00dd43625d6a0ed78c500971e7?placeholderIfAbsent=true"
                alt="Zeta Logo"
                className="aspect-[2.09] object-contain w-[120px] md:w-[134px]"
              />
              {/* <p className="mt-2 md:mt-[7px] md:ml-[15px] text-justify pr-4">
                Zeta is a property management software that will essentially make life easier for property managers who are at the intersection of landowners/property owners and tenants.
              </p> */}
            </div>
          </div>
          
          <div className="w-full md:w-[20%]">
            <div className="flex grow flex-col items-stretch text-black mt-4 md:mt-[17px]">
              <h3 className="text-lg md:text-xl font-medium leading-normal md:leading-10">Resources</h3>
              <ul className="text-sm md:text-base font-light leading-relaxed md:leading-[27px] mt-2 md:mt-[7px]">
                {[
                  "Zeta User Guide Brochure", 
                  "Videos & Tutorials", 
                  "Help Center"
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="hover:text-gray-600 cursor-pointer"
                    onClick={() => handleResourceClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[20%]">
            <div className="flex flex-col items-stretch text-black mt-4 md:mt-[17px]">
              <h3 className="text-lg md:text-xl font-medium leading-normal md:leading-10">About Zeta</h3>
              <ul className="text-sm md:text-base font-light leading-relaxed md:leading-[27px] mt-2">
                {["Our Story", "Pricing", "Terms of Service", "Privacy Policy"].map((item, index) => (
                  <li 
                    key={index} 
                    className="hover:text-gray-600 cursor-pointer"
                    onClick={() => handleAboutClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[20%]">
            <div className="flex flex-col items-stretch text-black mt-4 md:mt-[15px]">
              <h3 className="text-lg md:text-xl font-medium leading-normal md:leading-10 z-5">Contact Us</h3>
              <address className="text-sm md:text-base font-light leading-relaxed md:leading-[22px] not-italic mt-2">
                Zeta HQ,<br />
                Bains Ave, Dar es Salaam
              </address>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border self-stretch min-h-0 w-full mt-10 md:mt-20 lg:mt-[123px] border-[rgba(253,189,84,1)] border-solid" />
      
      <div className="text-neutral-900 text-xs md:text-sm font-normal leading-[1.4] text-center mt-6 md:mt-[26px]">
        © {new Date().getFullYear()} Zeta. All rights reserved.
      </div>
    </footer>
  );
};
