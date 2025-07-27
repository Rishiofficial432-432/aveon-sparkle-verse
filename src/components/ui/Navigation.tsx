import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import aveonLogo from '@/assets/aveon-logo.png';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className={`
        relative px-8 py-4 rounded-full transition-all duration-500
        ${isScrolled 
          ? 'glass-card backdrop-blur-md shadow-glow' 
          : 'bg-card/20 backdrop-blur-sm border border-white/10'
        }
      `}>
        {/* Curved background */}
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
        
        <div className="relative flex items-center justify-between space-x-12">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img src={aveonLogo} alt="Aveon AI" className="w-8 h-8" />
            <span className="text-lg font-bold gradient-text">AVEON AI</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 relative group text-sm font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--primary) / 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-glow text-sm"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="text-foreground p-2 rounded-full hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}