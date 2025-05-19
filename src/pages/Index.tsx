import React from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { RoleFeatures } from '@/components/landing/RoleFeatures';
import { ProductFeature } from '@/components/landing/ProductFeature';
import { AdditionalFeatures } from '@/components/landing/AdditionalFeatures';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center pt-10">
      <Header />
      
      <main>
        <Hero />
        
        <div className="border w-[1203px] shrink-0 max-w-full h-0 mt-[102px] border-[rgba(253,189,84,1)] border-solid max-md:mt-10" />
        
        <RoleFeatures />
        
        <div className="border w-[1203px] shrink-0 max-w-full h-0 mt-[73px] border-[rgba(253,189,84,1)] border-solid max-md:mt-10" />
        
        <ProductFeature
          title="Manage your all kind of properties with ease"
          description="No need to waste time tracking down rent payments. Give tenants a flexible, easy way to pay online"
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/0db097d3513615a8df5efb1e06f0a7664fe772ec?placeholderIfAbsent=true"
          imagePosition="left"
        />
        
        <ProductFeature
          title="Quickly screen and onboard tenants with minimal effort"
          description="Collect applications, run background checks, and sign lease agreements in time for moving day."
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/0251a5595d25c232448dff4775a60bb85f057269?placeholderIfAbsent=true"
          imagePosition="right"
        />
        
        <ProductFeature
          title="Effortlessly handle your accounting details"
          description="Set up invoices, send receipts, and create financial reports so you can track every last penny."
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/a7f4decbf61d6692948cfc3a73741819de459e2c?placeholderIfAbsent=true"
          imagePosition="left"
        />
        
        <ProductFeature
          title="Swiftly manage maintenance requests and vendors"
          description="Stay on top of all your maintenance needs with our simple, online portal."
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/0251a5595d25c232448dff4775a60bb85f057269?placeholderIfAbsent=true"
          imagePosition="right"
        />
        
        <div className="border w-[1203px] shrink-0 max-w-full h-0 mt-[122px] border-[rgba(253,189,84,1)] border-solid max-md:mt-10" />
        
        <AdditionalFeatures />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
