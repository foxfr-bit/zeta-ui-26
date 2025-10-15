
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="w-full sm:w-6/12 md:w-3/12 px-3 mb-8 md:mb-0">
    <motion.div 
      className="flex grow flex-col items-center text-black text-center cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        y: -10,
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <motion.img
        src={icon}
        alt={title}
        className="aspect-[1] object-contain w-[80px] md:w-[103px] max-w-full rounded-[50%]"
        whileHover={{ 
          rotate: [0, -10, 10, 0],
          scale: 1.1
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
      />
      <motion.h3 
        className="text-xl md:text-[25px] font-medium leading-[1.6] mt-2"
        whileHover={{ 
          color: "#F29703"
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      <p className="text-base md:text-lg font-normal leading-[1.4] md:leading-[22px] self-stretch">
        {description}
      </p>
    </motion.div>
  </div>
);

export const AdditionalFeatures = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bcf5e9211b5bd486bcc75c0c18d33f5c2ba15c0?placeholderIfAbsent=true",
      title: "Calendar",
      description: "Plan, schedule and manage your tasks, any time."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e96f0a80055f99184b08aa2af67f5d85d24220d?placeholderIfAbsent=true",
      title: "Contacts",
      description: "Create, organize and contact your tenants and service providers at with ease."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fba44f970676bfb561744b0b65343a49ced9f912?placeholderIfAbsent=true",
      title: "Reports",
      description: "Create, organize and download your reports with just a few clicks."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e875e2157d7811ee1922113c3467b3c82fccbb8?placeholderIfAbsent=true",
      title: "Documents",
      description: "Get access to all of your files and documents at one place."
    }
  ];

  return (
    <section className="w-full max-w-[1078px] pt-20 md:pt-32 lg:pt-[130px] pb-40 md:pb-32 lg:pb-[250px] px-2 md:px-3 lg:px-4">
      <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[41px] text-center mx-auto mb-4 md:mb-16 lg:mb-[100px]">
        Zeta offers other features to simplify
        <br className="hidden md:block" />
        your property management
      </h2>
      <div className="flex flex-wrap -mx-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
