import React from 'react';

export const Header = () => {
  return (
    <nav className="flex w-full max-w-[1275px] items-center gap-5 font-normal leading-[1.4] flex-wrap justify-between max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9690298b4295abdafb845c844373f837834a4d72?placeholderIfAbsent=true"
        alt="Zeta Logo"
        className="aspect-[2.48] object-contain w-[139px] self-stretch shrink-0 max-w-full"
      />
      <div className="self-stretch flex gap-[40px_48px] text-base text-black my-auto">
        <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
        <a href="#about" className="hover:text-gray-600 transition-colors">About Us</a>
        <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
        <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
      </div>
      <div className="self-stretch flex items-stretch text-sm my-auto">
        <button
          className="self-stretch z-10 gap-2.5 text-black whitespace-nowrap px-4 py-3 rounded-xl max-md:mr-[-7px] hover:bg-gray-100 transition-colors"
          onClick={() => console.log('Login clicked')}
        >
          Login
        </button>
        <button
          className="self-stretch bg-black gap-2.5 text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          onClick={() => console.log('Sign Up clicked')}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};
