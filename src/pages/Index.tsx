
import React from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { RoleFeatures } from '@/components/landing/RoleFeatures';
import { ProductFeature } from '@/components/landing/ProductFeature';
import { AdditionalFeatures } from '@/components/landing/AdditionalFeatures';
import { Footer } from '@/components/landing/Footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { AnimatedSection } from '@/components/ui/animated-section';

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex flex-col items-center px-2 md:px-3 lg:px-4 pt-10">
      
      <main className="w-full max-w-[1203px]">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        
        <div className="border w-full shrink-0 h-0 mt-16 md:mt-[102px] border-[rgba(253,189,84,1)] border-solid" />
        
        <AnimatedSection animation="fade-up" delay={200} mobileAnimation="fade-up">
          <RoleFeatures />
        </AnimatedSection>
        
        <div className="border w-full max-w-[1203px] shrink-0 h-0 mt-12 md:mt-[73px] border-[rgba(253,189,84,1)] border-solid" />
        
        <AnimatedSection animation="fade-left" mobileAnimation="fade-up">
          <ProductFeature
            label="Management"
            title="Manage your all kind of properties with ease"
            description="No need to waste time tracking down rent payments. Give tenants a flexible, easy way to pay online"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/0db097d3513615a8df5efb1e06f0a7664fe772ec?placeholderIfAbsent=true"
            imagePosition="left"
          />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-right" delay={100} mobileAnimation="fade-up">
          <ProductFeature
            label="Leasing"
            title="Quickly screen and onboard tenants with minimal effort"
            description="Collect applications, run background checks, and sign lease agreements in time for moving day."
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/0251a5595d25c232448dff4775a60bb85f057269?placeholderIfAbsent=true"
            imagePosition="right"
          />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-left" delay={100} mobileAnimation="fade-up">
          <ProductFeature
            label="Accounting"
            title="Effortlessly handle your accounting details"
            description="Set up invoices, send receipts, and create financial reports so you can track every last penny."
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/a7f4decbf61d6692948cfc3a73741819de459e2c?placeholderIfAbsent=true"
            imagePosition="left"
          />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-right" delay={100} mobileAnimation="fade-up">
          <ProductFeature
            label="Maintenance"
            title="Swiftly manage maintenance requests and vendors"
            description="Stay on top of all your maintenance needs with our simple, online portal."
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/0251a5595d25c232448dff4775a60bb85f057269?placeholderIfAbsent=true"
            imagePosition="right"
          />
        </AnimatedSection>
        
        <div className="border w-full max-w-[1203px] shrink-0 h-0 mt-16 md:mt-[122px] border-[rgba(253,189,84,1)] border-solid" />
        
        <AnimatedSection animation="zoom-in" delay={150} mobileAnimation="fade-up">
          <AdditionalFeatures />
        </AnimatedSection>
        
       
      </main>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
