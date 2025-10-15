import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';
import { Building2, Users, DollarSign, Wrench, FileText } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Comprehensive Property Management',
      description: 'Our core services are designed to handle every aspect of your rental property, providing peace of mind and maximizing your investment\'s potential.',
      icon: <Building2 className="w-8 h-8" style={{ color: '#FDBD54' }} />,
    },
    {
      id: 2,
      title: 'Tenant Placement & Screening',
      description: 'We conduct rigorous credit, criminal, and reference checks to find reliable and responsible tenants for your property. This reduces the risk of late payments and property damage, ensuring a stable tenancy.',
      icon: <Users className="w-8 h-8" style={{ color: '#FDBD54' }} />,
    },
    {
      id: 3,
      title: 'Rent Collection & Financial Reporting',
      description: 'Our automated system ensures on-time rent collection each month and provides you with detailed, transparent income and expense reports. This simplifies your accounting and gives you a clear, real-time view of your investment\'s performance.',
      icon: <DollarSign className="w-8 h-8" style={{ color: '#FDBD54' }} />,
    },
    {
      id: 4,
      title: 'Maintenance & Repair Coordination',
      description: 'We offer a 24/7 hotline for tenant maintenance requests and manage a network of trusted, licensed contractors to address issues promptly. This protects your property\'s value and ensures tenant satisfaction without the hassle for you.',
      icon: <Wrench className="w-8 h-8" style={{ color: '#FDBD54' }} />,
    },
    {
      id: 5,
      title: 'Lease Management & Legal Compliance',
      description: 'We prepare specific lease agreements and handle all renewals, violations, and compliance with evolving landlord-tenant laws. This safeguards you from potential legal disputes and ensures all processes are professionally managed.',
      icon: <FileText className="w-8 h-8" style={{ color: '#FDBD54' }} />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer a comprehensive suite of property management solutions,
              complemented by a full spectrum of business and technology services to give
              you a complete competitive advantage.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Main Services
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      {index + 1}. {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
