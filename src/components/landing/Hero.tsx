
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section 
      className="w-full max-w-[1190px] mt-8 md:mt-16 lg:mt-[141px] px-2 md:px-4 lg:px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="gap-5 flex flex-col md:flex-row md:items-stretch">
        <div className="w-full md:w-[46%]">
          <div className="self-stretch my-auto">
            <motion.h1 
              className="text-black text-3xl md:text-4xl lg:text-[55px] font-medium leading-tight md:leading-[1.2] lg:leading-[61px] tracking-[-0.55px]"
              variants={itemVariants}
            >
              Effortlessly Manage Your Properties
            </motion.h1>
            <div className="w-full mt-4 md:mt-[7px]">
              <motion.p 
                className="text-black text-lg md:text-xl lg:text-2xl font-normal leading-[1.4]"
                variants={itemVariants}
              >
                Reliable solutions for all your property needs.
              </motion.p>
              <motion.div 
                className="flex flex-wrap w-full md:w-auto max-w-full items-center gap-4 md:gap-5 mt-6 md:mt-[30px]"
                variants={containerVariants}
              >
                <motion.button
                  className="bg-[rgba(253,189,84,1)] text-base md:text-xl text-black font-normal leading-[1.4] px-5 md:px-[30px] py-3 md:py-[15px] rounded-xl hover:bg-[rgba(230,168,74,1)] transition-colors"
                  onClick={() => console.log('Get Started clicked')}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.button 
                  className="flex items-center gap-2 text-base md:text-[19px] font-medium leading-normal md:leading-10 transition-colors"
                  style={{ color: 'rgba(253,189,84,1)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(230,168,74,1)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(253,189,84,1)'}
                  onClick={() => console.log('Learn more clicked')}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                  <motion.img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ede247f311e3d195fb22b9ee1bad507c8e4175?placeholderIfAbsent=true"
                    alt="Arrow right"
                    className="aspect-[1] object-contain w-3 shrink-0 my-auto"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[54%] mt-8 md:mt-0">
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11f54639588db6653932cf57208da471dfdc980?placeholderIfAbsent=true"
            alt="Property Management"
            className="aspect-[1.15] object-contain w-full rounded-[30px] md:rounded-[50px] lg:rounded-[73px]"
            variants={imageVariants}
          />
        </div>
      </div>
    </motion.section>
  );
};
