import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[rgba(241,235,222,1)] self-stretch flex w-full flex-col items-center mt-20 md:mt-32 lg:mt-[159px] pt-10 md:pt-[50px] pb-6 md:pb-[31px]">
      <div className="w-full max-w-[1261px] px-4 md:px-6 lg:px-10">
        <div className="gap-6 md:gap-5 flex flex-col md:flex-row">
          <div className="w-full md:w-[38%]">
            <div className="text-base text-black font-light leading-[1.6] md:leading-[27px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c439c0acd447c00dd43625d6a0ed78c500971e7?placeholderIfAbsent=true"
                alt="Zeta Logo"
                className="aspect-[2.09] object-contain w-[120px] md:w-[134px]"
              />
              <p className="mt-2 md:mt-[7px] md:ml-[21px]">
                Zeta is a property management software that will essentially make life easier for property managers who are at the intersection of landowners/property owners and tenants.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-[22%]">
            <div className="flex grow flex-col items-stretch text-black mt-4 md:mt-[17px]">
              <h3 className="text-lg md:text-xl font-medium leading-normal md:leading-10">Features</h3>
              <ul className="text-sm md:text-base font-light leading-relaxed md:leading-[27px] grid grid-cols-2 md:grid-cols-1 gap-x-2 mt-2 md:mt-[7px]">
                {[
                  "Online Payments", "Tenant Screening", "Lead Tracking",
                  "Rental Applications", "Online Leases", "Accounting",
                  "Reports", "Maintenance Requests", "Team Management",
                  "Rent Reporting", "Maintenance Bidding", "Rentability Report"
                ].map((item, index) => (
                  <li key={index} className="hover:text-gray-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[16%]">
            <div className="flex flex-col items-stretch text-black mt-4 md:mt-[17px]">
              <h3 className="text-lg md:text-xl font-medium leading-normal md:leading-10">About Zeta</h3>
              <ul className="text-sm md:text-base font-light leading-relaxed md:leading-[27px] mt-2">
                {["Our Story", "Pricing", "Terms of Service", "Privacy Policy"].map((item, index) => (
                  <li key={index} className="hover:text-gray-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[24%]">
            <div className="flex flex-col items-stretch text-black mt-4 md:mt-[15px]">
              <h3 className="text-lg md:text-xl font-medium leading-normal md:leading-10 z-10">Contact Us</h3>
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
        © 2024 Zeta. All rights reserved.
      </div>
    </footer>
  );
};
