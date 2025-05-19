import React from 'react';

interface RoleCardProps {
  image: string;
  title: string;
  description: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ image, title, description }) => (
  <div className="w-3/12 max-md:w-full max-md:ml-0">
    <div className="flex grow flex-col items-stretch text-black text-center max-md:mt-10">
      <img
        src={image}
        alt={title}
        className="aspect-[1.01] object-contain w-full rounded-2xl"
      />
      <h3 className="text-[25px] font-medium leading-loose self-center mt-[13px]">
        {title}
      </h3>
      <p className="text-base font-light leading-[23px]">
        {description}
      </p>
    </div>
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
    <section className="w-full max-w-[1110px] mt-[68px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-black text-4xl font-medium leading-[41px] text-center w-[693px] mx-auto mb-[68px] max-md:max-w-full max-md:mt-10">
        A solution with tools and features designed for your role
      </h2>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {roles.map((role, index) => (
          <RoleCard key={index} {...role} />
        ))}
      </div>
    </section>
  );
};
