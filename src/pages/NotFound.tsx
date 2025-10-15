import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Services", path: "/services", icon: <Search className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#FDBD54' }} />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full opacity-5" style={{ backgroundColor: '#FDBD54' }} />
      
      <div className="flex-grow flex items-center justify-center px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[200px] font-bold text-gray-900 leading-none">
              404
            </h1>
            <div className="w-32 h-2 rounded-full mx-auto mt-4" style={{ backgroundColor: '#FDBD54' }} />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-gray-500">
              The page might have been moved or deleted.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 transition-all shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#FDBD54' }}
            >
              <Home className="w-5 h-5" />
              Back to Home
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="border-t border-gray-200 pt-8"
          >
            <p className="text-sm text-gray-600 mb-4">Or explore these pages:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.path}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  onClick={() => navigate(link.path)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-gray-700 hover:text-gray-900"
                >
                  {link.icon}
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
