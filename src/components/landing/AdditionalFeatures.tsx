import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="w-3/12 max-md:w-full max-md:ml-0">
    <div className="flex grow flex-col items-center text-black text-center max-md:mt-10">
      <img
        src={icon}
        alt={title}
        className="aspect-[1] object-contain w-[103px] max-w-full rounded-[50%]"
      />
      <h3 className="text-[25px] font-medium leading-[1.6] mt-2">
        {title}
      </h3>
      <p className="text-lg font-normal leading-[22px] self-stretch">
        {description}
      </p>
    </div>
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
    <section className="w-full max-w-[1078px] mt-[100px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-black text-4xl font-medium leading-[41px] text-center w-[693px] mx-auto mb-[100px] max-md:max-w-full max-md:mt-10">
        Zeta offers other features to simplify
        <br />
        your property management
      </h2>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
