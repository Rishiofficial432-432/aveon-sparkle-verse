import { motion } from 'framer-motion';
import aveonLogo from '@/assets/aveon-logo.png';

const footerLinks = {
  Product: ['Features', 'Pricing', 'API Docs', 'Integrations'],
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Status'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
};

export default function Footer() {
  return (
    <footer className="bg-card/30 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3 mb-4"
            >
              <img src={aveonLogo} alt="Aveon AI" className="w-10 h-10" />
              <span className="text-xl font-bold gradient-text">AVEON AI</span>
            </motion.div>
            <p className="text-foreground/70 mb-6 max-w-md">
              We don't automate. We strategize intelligence. Building the future of AI-powered business solutions.
            </p>
            <div className="flex space-x-4">
              <div className="text-sm text-foreground/60">
                © 2024 Aveon AI. All rights reserved.
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-foreground/60 mb-4 md:mb-0">
            Built with ❤️ for the future of AI
          </div>
          <div className="flex items-center space-x-6 text-sm text-foreground/60">
            <span>Status: All systems operational</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}