import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';
import { Building2, Users, DollarSign, Wrench, FileText, ChevronRight, Home, TrendingUp, Smartphone, Monitor, Palette, Share2 } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  heading: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
}

interface ComplementaryService {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const complementaryServices: ComplementaryService[] = [
    {
      id: 1,
      title: 'Airbnb Management',
      description: 'We handle everything from dynamic pricing and guest communication to professional turnover cleaning. Maximize your rental income and occupancy rates while we manage the day-to-day workload for you.',
      icon: <Home className="w-6 h-6" style={{ color: '#1e293b' }} />,
    },
    {
      id: 2,
      title: 'Real Estate Investment Consultancy',
      description: 'Our experts provide data-driven analysis on property valuation and neighborhood growth potential. Make informed decisions to build a profitable and sustainable real estate portfolio tailored to your goals.',
      icon: <TrendingUp className="w-6 h-6" style={{ color: '#1e293b' }} />,
    },
    {
      id: 3,
      title: 'Website & Mobile App Development',
      description: 'We create fast, secure, and user-friendly digital platforms tailored to your specific brand and business needs. Enhance your online presence, engage your audience effectively, and streamline customer interactions for a seamless experience.',
      icon: <Smartphone className="w-6 h-6" style={{ color: '#1e293b' }} />,
    },
    {
      id: 4,
      title: 'Computer Hardware & Software Maintenance',
      description: 'We provide proactive monitoring and rapid support for all your business technology. Minimize costly downtime and ensure your systems are always secure, updated, and running efficiently.',
      icon: <Monitor className="w-6 h-6" style={{ color: '#1e293b' }} />,
    },
    {
      id: 5,
      title: 'Branding & Graphic Design',
      description: 'We craft a unique visual identity, from logos to marketing materials, that builds instant recognition and trust. Differentiate your business in a crowded market and attract your ideal customers with a professional and cohesive brand image.',
      icon: <Palette className="w-6 h-6" style={{ color: '#1e293b' }} />,
    },
    {
      id: 6,
      title: 'Social Media Management',
      description: 'We develop and execute a strategic content plan to grow your audience and foster meaningful engagement. Strengthen your community, enhance brand loyalty, and convert followers into loyal customers.',
      icon: <Share2 className="w-6 h-6" style={{ color: '#1e293b' }} />,
    },
  ];

  const services: Service[] = [
    {
      id: 1,
      title: 'Property Management',
      heading: 'Complete property oversight, simplified',
      description: 'Our core services are designed to handle every aspect of your rental property, providing peace of mind and maximizing your investment\'s potential.',
      features: [
        'Full-service property management',
        'Regular property inspections and maintenance',
        'Tenant communication and support',
        'Financial reporting and analytics'
      ],
      icon: <Building2 className="w-7 h-7" style={{ color: '#1e293b' }} />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Tenant Screening',
      heading: 'Find the right renters, faster',
      description: 'Automate your leasing process from listing to lease. Collect applications, run background and credit checks, and finalize lease agreements, all in time for moving day.',
      features: [
        'Screen tenants with 99.9% accuracy',
        'Set pre-screening questions and application fees',
        'Choose from several screening packages'
      ],
      icon: <Users className="w-7 h-7" style={{ color: '#1e293b' }} />,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Rent Collection',
      heading: 'Automated rent collection made easy',
      description: 'Our automated system ensures on-time rent collection each month and provides you with detailed, transparent income and expense reports.',
      features: [
        'Automatic rent collection and reminders',
        'Multiple payment methods supported',
        'Real-time financial reporting',
        'Late payment tracking and management'
      ],
      icon: <DollarSign className="w-7 h-7" style={{ color: '#1e293b' }} />,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Maintenance Coordination',
      heading: 'Keep your property in top condition',
      description: 'We offer a 24/7 hotline for tenant maintenance requests and manage a network of trusted, licensed contractors to address issues promptly.',
      features: [
        '24/7 maintenance request hotline',
        'Network of licensed contractors',
        'Preventive maintenance scheduling',
        'Real-time repair status updates'
      ],
      icon: <Wrench className="w-7 h-7" style={{ color: '#1e293b' }} />,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      title: 'Legal Compliance',
      heading: 'Stay compliant, avoid disputes',
      description: 'We prepare specific lease agreements and handle all renewals, violations, and compliance with evolving landlord-tenant laws.',
      features: [
        'State-specific lease agreements',
        'Automatic compliance updates',
        'Violation and eviction management',
        'Legal dispute protection'
      ],
      icon: <FileText className="w-7 h-7" style={{ color: '#1e293b' }} />,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveService(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="bg-white py-20 px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#FDBD54' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5" style={{ backgroundColor: '#FDBD54' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-6"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FDBD54' }} />
              <span className="text-sm font-medium text-gray-700">Comprehensive Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              We offer a comprehensive suite of property management solutions,
              complemented by a full spectrum of business and technology services to give
              you a complete competitive advantage.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-sm text-gray-600">Core Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">6+</div>
                <div className="text-sm text-gray-600">Additional Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">Dedicated Team</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Split Layout: Services Left, Sticky Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Scrolling Services */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="py-16"
                >
                  <div className="flex flex-col gap-6 text-left">
                    {/* Icon + Title Header */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FDBD54' }}>
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-normal text-gray-900">
                        {service.title}
                      </h4>
                    </div>

                    {/* Large Heading */}
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                      {service.heading}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mt-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                          <span className="text-gray-900 text-lg font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 font-semibold text-lg hover:gap-3 transition-all mt-2"
                      style={{ color: '#FDBD54' }}
                    >
                      Learn more
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Sticky Image */}
            <div className="hidden lg:block">
              <div className="sticky h-[600px]" style={{ top: '200px' }}>
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {services[activeService].icon}
                      </div>
                      <span className="text-sm font-medium text-gray-900 px-3 py-1 rounded-full" style={{ backgroundColor: '#FDBD54' }}>
                        Service {activeService + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">
                      {services[activeService].title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complementary Services Section */}
      <div className="bg-gray-100 py-20 px-4 pb-40">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complementary Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To fully support your venture, we offer a range of additional services that
              empower your entire business, from marketing to technology.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complementaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#FDBD54' }}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
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
