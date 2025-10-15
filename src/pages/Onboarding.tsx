import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Users, Wrench, Building2, CheckCircle2, Shield, Clock } from 'lucide-react';
import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';

interface Role {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles: Role[] = [
    {
      id: 'property-manager',
      title: 'Property Manager',
      description: 'Manage your portfolio of properties with ease. Oversee tenants, maintenance, and financial operations.',
      icon: <Home className="w-8 h-8" style={{ color: '#FDBD54' }} />,
    },
    {
      id: 'tenant',
      title: 'Tenant',
      description: 'Find your next home, connect with landlords, and manage your rental experience seamlessly.',
      icon: <Users className="w-8 h-8" style={{ color: '#FDBD54' }} />,
    },
    {
      id: 'service-provider',
      title: 'Service Provider',
      description: 'Grow your business by connecting with property managers and expanding your expertise.',
      icon: <Wrench className="w-8 h-8" style={{ color: '#FDBD54' }} />,
    },
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
  };

  const handleNext = () => {
    if (selectedRole) {
      // Store the selected role temporarily
      console.log('Selected role:', selectedRole);
      localStorage.setItem('selectedRole', selectedRole);
      
      // Navigate to signup page with the selected role
      navigate('/signup', { state: { role: selectedRole } });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#FDBD54' }} />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full opacity-5" style={{ backgroundColor: '#FDBD54' }} />
      
      <div className="relative flex items-center justify-center px-4" style={{ paddingTop: '10%', paddingBottom: '10%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl"
        >
        {/* Header */}
        <div className="text-center mb-12">
          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-6"
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FDBD54' }} />
            <span className="text-sm font-medium text-gray-700">Step 1 of 2</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Select your role
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Choose the role that best describes you to get a personalized experience
          </motion.p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              onClick={() => handleRoleSelect(role.id)}
              className={`relative bg-white rounded-2xl p-6 lg:px-4 cursor-pointer transition-all duration-300 w-full min-h-[264px] ${
                selectedRole === role.id
                  ? 'ring-2 ring-offset-2 shadow-xl scale-105'
                  : 'hover:shadow-lg hover:scale-102'
              }`}
              style={
                selectedRole === role.id
                  ? { boxShadow: '0 0 0 2px #FDBD54, 0 0 0 4px white' }
                  : {}
              }
            >
              {/* Selection indicator */}
              {selectedRole === role.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#FDBD54' }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </motion.div>
              )}

              {/* Icon */}
              <div className="mb-4 flex justify-start">
                <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center">
                  {role.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {role.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-gray-50 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Why Choose Zeta?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FDBD54' }}>
                <CheckCircle2 className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Easy Setup</h4>
                <p className="text-sm text-gray-600">Get started in minutes with our intuitive onboarding</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FDBD54' }}>
                <Shield className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Secure & Reliable</h4>
                <p className="text-sm text-gray-600">Your data is protected with enterprise-grade security</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FDBD54' }}>
                <Clock className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-sm text-gray-600">Our team is always here to help you succeed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Property Owner Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-sm">
            I'm a{' '}
            <button
              onClick={() => {
                localStorage.setItem('selectedRole', 'owner');
                navigate('/signup', { state: { role: 'owner' } });
              }}
              className="font-medium underline hover:no-underline transition-all"
              style={{ color: '#FDBD54' }}
            >
              Property Owner
            </button>
            . My properties are managed by Property Managers.
          </p>
        </motion.div>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: selectedRole ? 1.05 : 1 }}
            whileTap={{ scale: selectedRole ? 0.95 : 1 }}
            onClick={handleNext}
            disabled={!selectedRole}
            className="px-16 py-4 rounded-xl font-semibold text-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-lg"
            style={{
              backgroundColor: selectedRole ? '#FDBD54' : '#D1D5DB',
            }}
          >
            Continue
          </motion.button>
          {!selectedRole && (
            <p className="text-sm text-gray-500">Please select a role to continue</p>
          )}
        </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Onboarding;
