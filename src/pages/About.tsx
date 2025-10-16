import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/landing/Header';
import { Footer } from '../components/landing/Footer';
import { Key, Shield, TrendingUp, Heart, Target, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Key className="w-6 h-6" style={{ color: '#1e293b' }} />,
      title: 'Your Dream, Our Mission',
      description: 'We understand that every property represents hope, sacrifice, and ambition.',
    },
    {
      icon: <Shield className="w-6 h-6" style={{ color: '#1e293b' }} />,
      title: 'Security & Trust',
      description: 'Your assets are protected with enterprise-grade systems and trusted professionals.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" style={{ color: '#1e293b' }} />,
      title: 'Growth & Scale',
      description: 'Built to empower you to scale with confidence and make data-driven decisions.',
    },
    {
      icon: <Heart className="w-6 h-6" style={{ color: '#1e293b' }} />,
      title: 'Peace of Mind',
      description: 'Reclaim your time and freedom while we handle the daily grind.',
    },
  ];

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
              <span className="text-sm font-medium text-gray-700">Our Story</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Zeta
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              More Than Properties, Managed. Lives, Empowered.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Story Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* The Key */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#FDBD54' }}>
                <Key className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  It starts with a key. It's more than metal; it's a promise. A promise of security, of opportunity, of a future built brick by brick. It represents a dream, an investment of not just money, but of hope, sweat, and sacrifice.
                </p>
              </div>
            </div>

            {/* The Problem */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                But for too long, that dream has been clouded. By the 2 AM emergency call about a burst pipe. The dread of a vacant unit and the silent calculator of lost income. The endless paperwork, the difficult conversations, the feeling that you're not just managing properties, but you're being managed by them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We know this story because we've lived it. And we believed you deserved a better one.
              </p>
            </div>

            {/* Why Zeta Was Born */}
            <div className="text-center py-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl mb-6"
                style={{ backgroundColor: '#FDBD54' }}
              >
                <Sparkles className="w-6 h-6 text-gray-900" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  This is why Zeta was born
                </h2>
              </motion.div>
            </div>

            {/* Understanding */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand the weight of the portfolio you've tirelessly built, the anxiety that comes when your livelihood is on the line, and the deep desire to see your vision grow without being buried in the daily grind.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We also recognize the pressure of managing someone else's dream, where your success is measured in seamless operations and calm efficiency, often behind the scenes.
              </p>
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Zeta was built on this fundamental truth: whether you're nurturing your own legacy or expertly guiding another's, you deserve to work with <strong>clarity, not clutter</strong>; with <strong>control, not chaos</strong>.
                </p>
              </div>
            </div>

            {/* What Zeta Is */}
            <div className="space-y-6 pt-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Zeta is the quiet confidence of a system that works as hard as you do. It's the peace of mind that comes from knowing rent is securely collected, maintenance is handled seamlessly by trusted pros, and your financial picture is clear the moment you log in.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It's the hours given back to you, hours to scout your next investment, to enjoy time with your family, or simply to breathe easy, knowing your assets are protected and growing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                But beyond the algorithms and automation, Zeta is about aspiration. It's about empowering you to scale with confidence, to make data-driven decisions with clarity, and to reclaim the freedom that led you to real estate in the first place. We see your ambition, and we've built the tool to fuel it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FDBD54' }}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: '#FDBD54' }}>
              <Target className="w-10 h-10 text-gray-900" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome to Zeta
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              Where we handle the work, so you can lead the vision.
            </p>
            
            <div className="pt-6">
              <p className="text-lg text-gray-600 mb-2">
                Your dream built the foundation.
              </p>
              <p className="text-xl font-semibold text-gray-900">
                Now, let's build the future, together.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 transition-all shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#FDBD54' }}
              >
                Get Started with Zeta
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
