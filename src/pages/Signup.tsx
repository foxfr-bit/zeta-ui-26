import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Loader2, Home, Users, Wrench, Building2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    numberOfUnits: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToSMS, setAgreeToSMS] = useState(false);

  // Get role from navigation state or localStorage
  useEffect(() => {
    const roleFromState = (location.state as { role?: string })?.role;
    const roleFromStorage = localStorage.getItem('selectedRole');
    const role = roleFromState || roleFromStorage || '';
    
    if (role) {
      setSelectedRole(role);
    } else {
      // If no role selected, redirect to onboarding
      navigate('/onboarding');
    }
  }, [location, navigate]);

  // Helper function to get role display info
  const getRoleInfo = (roleId: string) => {
    const roles: Record<string, { title: string; icon: React.ReactNode }> = {
      'property-manager': {
        title: 'Property Manager',
        icon: <Home className="w-5 h-5" style={{ color: '#FDBD54' }} />
      },
      'tenant': {
        title: 'Tenant',
        icon: <Users className="w-5 h-5" style={{ color: '#FDBD54' }} />
      },
      'service-provider': {
        title: 'Service Provider',
        icon: <Wrench className="w-5 h-5" style={{ color: '#FDBD54' }} />
      },
      'owner': {
        title: 'Owner',
        icon: <Building2 className="w-5 h-5" style={{ color: '#FDBD54' }} />
      }
    };
    return roles[roleId] || { title: '', icon: null };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    const requiredFields = ['email', 'firstName', 'lastName', 'phoneNumber', 'password', 'confirmPassword'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (emptyFields.length > 0) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    if (!agreeToTerms) {
      setError('Please agree to the Terms of Use and Privacy Policy');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Signup successful:', { ...formData, role: selectedRole });
      
      // Store the user role after successful signup
      localStorage.setItem('userRole', selectedRole);
      localStorage.removeItem('selectedRole'); // Clean up temporary storage
      
      // Navigate to home page after successful signup
      navigate('/home');
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Main Signup Content */}
      <div className="flex w-full items-center px-2 md:px-3 lg:px-4 min-h-[calc(100vh-80px)">
        {/* Left side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative p-8 left-[side] max-md:hidden"
        >
          <div className="w-full h-full relative rounded-2xl overflow-hidden">
            <img
              src="/proptyimg.png"
              className="w-full h-full object-cover"
              alt="City buildings at night"
            />
        
            {/* Overlay content */}
            <div className="absolute w-[479px] h-[104px] left-[186px] top-[212px]">
              <h2 className="text-white text-center font-light text-[40px] leading-[52px]">
                Property management<br />
                made easier.
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Right side - Signup form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md space-y-6"
          >
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold text-gray-900">Create your account</h2>
              <p className="text-gray-600">Enter your details to continue</p>
            </div>

            {/* Selected Role Display */}
            {selectedRole && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-yellow-50 border border-yellow-200 px-4 py-3 rounded-lg flex items-center gap-3"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
                  {getRoleInfo(selectedRole).icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Signing up as: <span style={{ color: '#FDBD54' }}>{getRoleInfo(selectedRole).title}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/onboarding')}
                    className="text-xs text-gray-600 hover:text-gray-800 underline"
                  >
                    Change role
                  </button>
                </div>
              </motion.div>
            )}

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* First Name and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name*
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name*
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Phone Number and Number of Units */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number*
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+255"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="numberOfUnits" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of units*
                  </label>
                  <input
                    id="numberOfUnits"
                    name="numberOfUnits"
                    type="number"
                    value={formData.numberOfUnits}
                    onChange={handleInputChange}
                    placeholder="Enter your number of units"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Password fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Create password*
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm password*
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I agree to the{' '}
                    <a 
                      href="#" 
                      className="font-medium"
                      style={{ color: '#FDBD54' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#E6A84A'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#FDBD54'}
                    >
                      Terms of Use
                    </a>{' '}
                    and{' '}
                    <a 
                      href="#" 
                      className="font-medium"
                      style={{ color: '#FDBD54' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#E6A84A'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#FDBD54'}
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreeToSMS}
                    onChange={(e) => setAgreeToSMS(e.target.checked)}
                    className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I agree to receive SMS marketing communications
                  </span>
                </label>
              </div>

              {/* Signup button */}
              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Proceed'
                )}
              </motion.button>

              {/* Login link */}
              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="font-medium"
                  style={{ color: '#FDBD54' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#E6A84A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FDBD54'}
                >
                  Log in
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
