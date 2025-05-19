import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[rgba(241,235,222,1)] self-stretch flex w-full flex-col items-center mt-[159px] pt-[50px] pb-[31px] max-md:max-w-full max-md:mt-10">
      <div className="w-full max-w-[1261px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[38%] max-md:w-full max-md:ml-0">
            <div className="text-base text-black font-light leading-[27px] max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c439c0acd447c00dd43625d6a0ed78c500971e7?placeholderIfAbsent=true"
                alt="Zeta Logo"
                className="aspect-[2.09] object-contain w-[134px] max-w-full"
              />
              <p className="ml-[21px] mt-[7px] max-md:ml-2.5">
                Zeta is a property management software that will essentially make life easier for property managers who are at the intersection of landowners/property owners and tenants.
              </p>
            </div>
          </div>
          
          <div className="w-[22%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch text-black mt-[17px] max-md:mt-10">
              <h3 className="text-xl font-medium leading-10">Features</h3>
              <ul className="text-base font-light leading-[27px] mt-[7px]">
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

          <div className="w-[16%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch text-black mt-[17px] max-md:mt-10">
              <h3 className="text-xl font-medium leading-10">About Zeta</h3>
              <ul className="text-base font-light leading-[27px]">
                {["Our Story", "Pricing", "Terms of Service", "Privacy Policy"].map((item, index) => (
                  <li key={index} className="hover:text-gray-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch text-black mt-[15px] max-md:mt-10">
              <h3 className="text-xl font-medium leading-10 z-10">Contact Us</h3>
              <address className="text-base font-light leading-[22px] not-italic">
                Zeta HQ,<br />
                Bains Ave, Dar es Salaam
              </address>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border self-stretch min-h-0 w-full mt-[123px] border-[rgba(253,189,84,1)] border-solid max-md:max-w-full max-md:mt-10" />
      
      <div className="text-neutral-900 text-sm font-normal leading-[1.4] text-center mt-[26px]">
        © 2024 Zeta. All rights reserved.
      </div>
    </footer>
  );
};
