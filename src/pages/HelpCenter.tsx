import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0); // First FAQ expanded by default

  const faqs = [
    {
      question: "What can I do using Zeta platform?",
      answer: {
        landlords: "Collect rent, manage rentals, handle maintenance, sign leases, market vacancies, and access financial tools online.",
        tenants: "Find homes, pay rent, submit requests, sign leases, and communicate with landlords online.",
        owners: "Access reports, track finances, communicate, and manage payments with property managers.",
        servicePros: "Build profiles, manage tasks, handle payments, and communicate with clients"
      }
    },
    {
      question: "How is my data protected within the system?",
      answer: "Zeta uses industry-standard encryption and security measures to protect your data. All information is stored securely and we comply with data protection regulations to ensure your privacy and security."
    },
    {
      question: "What online payments methods does Zeta support?",
      answer: "Zeta supports various payment methods including credit cards, debit cards, bank transfers, and digital wallets. We work with secure payment processors to ensure safe and reliable transactions."
    },
    {
      question: "Is Zeta free?",
      answer: "Zeta offers different pricing plans to suit various needs. We have a free tier with basic features, as well as premium plans with advanced functionality. Check our pricing page for detailed information."
    },
    {
      question: "Does the software work offline?",
      answer: "Zeta is primarily a cloud-based platform that requires internet connectivity for most features. However, some basic functions may be available offline with data syncing when you reconnect to the internet."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Main Help Center Content */}
      <div className="flex flex-col items-center px-4 py-16 min-h-[calc(100vh-80px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl text-center"
        >
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-normal mb-6" style={{ color: '#FDBD54' }}>
              Help Centre
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-normal leading-relaxed">
              Find answers to all of your questions and<br />
              get the best out of Zeta.
            </p>
          </div>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSearch}
            className="mb-16"
          >
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all bg-gray-50"
                style={{ '--tw-ring-color': '#FDBD54' } as React.CSSProperties}
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#FDBD54'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <Search size={24} />
              </button>
            </div>
          </motion.form>

          {/* Top Asked Questions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-left"
          >
            <h2 className="text-2xl md:text-3xl font-normal mb-8 text-center" style={{ color: '#FDBD54' }}>
              Top Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="border-b border-gray-200 pb-4"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left py-4 transition-colors"
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FDBD54'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {expandedFAQ === index ? (
                      <ChevronUp size={24} className="text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={24} className="text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pb-4"
                    >
                      {typeof faq.answer === 'string' ? (
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      ) : (
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          <div>
                            <span className="font-medium text-gray-800">Landlords and Property Managers: </span>
                            {faq.answer.landlords}
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">Tenants: </span>
                            {faq.answer.tenants}
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">Owners: </span>
                            {faq.answer.owners}
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">ServicePros: </span>
                            {faq.answer.servicePros}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-8 bg-gray-50 rounded-lg text-center"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <button 
              className="text-white px-8 py-3 rounded-lg transition-colors font-medium"
              style={{ backgroundColor: '#FDBD54' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E6A84A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FDBD54'}
            >
              Contact Support
            </button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
