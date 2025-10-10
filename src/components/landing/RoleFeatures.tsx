
import React from 'react';
import { motion } from 'framer-motion';

interface RoleCardProps {
  image: string;
  title: string;
  description: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ image, title, description }) => (
  <div className="w-full sm:w-6/12 md:w-3/12 px-3 mb-8 md:mb-0">
    <motion.div 
      className="flex grow flex-col items-stretch text-black text-center cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        y: -5,
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <motion.img
        src={image}
        alt={title}
        className="aspect-[1.01] object-contain w-full rounded-2xl"
        whileHover={{ 
          scale: 1.1
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      />
      <motion.h3 
        className="text-xl md:text-[25px] font-medium leading-loose self-center mt-2 md:mt-[13px]"
        whileHover={{ 
          color: "#F29703"
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      <p className="text-sm md:text-base font-light leading-[1.5] md:leading-[23px]">
        {description}
      </p>
    </motion.div>
  </div>
);

export const RoleFeatures = () => {
  const roles = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9189fef383e5fe33c66f99578349463b1d484a61?placeholderIfAbsent=true",
      title: "Property Managers",
      description: "Manage your all kind of properties and connect with your tenants online."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1473f1637affa56bdb0c0c8d311cf89e6581754a?placeholderIfAbsent=true",
      title: "Tenants",
      description: "Find your new home, connect with your property manager, and sign your lease with ease."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/995778116c0a0a2a7d395cec7e5611070a9b0ce0?placeholderIfAbsent=true",
      title: "Service Providers",
      description: "Create your business profile and update it with your skills, experience and portfolio."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/51a7c4017ea8063943a1220de47bfcf7d77ec62f?placeholderIfAbsent=true",
      title: "Landlords",
      description: "List your properties, review leads, and invite them to apply with just a few steps."
    }
  ];

  return (
    <section className="w-full max-w-[1110px] pt-16 md:pt-[88px] pb-16 md:pb-[88px] px-2 md:px-3 lg:px-4">
      <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[41px] text-center mx-auto mb-8 md:mb-[68px]">
        A solution with tools and features designed for your role
      </h2>
      <div className="flex flex-wrap -mx-3">
        {roles.map((role, index) => (
          <RoleCard key={index} {...role} />
        ))}
      </div>
    </section>
  );
};
