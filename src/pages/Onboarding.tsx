import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Users, Wrench } from 'lucide-react';

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
      // Store the selected role (in a real app, this would be saved to backend/context)
      console.log('Selected role:', selectedRole);
      localStorage.setItem('userRole', selectedRole);
      
      // Navigate to home page after role selection
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-3"
          >
            Select your role
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 text-lg"
          >
            Select the role that suits your preferences
          </motion.p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              onClick={() => handleRoleSelect(role.id)}
              className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
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
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center">
                  {role.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
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

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: selectedRole ? 1.05 : 1 }}
            whileTap={{ scale: selectedRole ? 0.95 : 1 }}
            onClick={handleNext}
            disabled={!selectedRole}
            className="px-12 py-3 rounded-xl font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            style={{
              backgroundColor: selectedRole ? '#FDBD54' : '#D1D5DB',
            }}
          >
            Next
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Onboarding;
