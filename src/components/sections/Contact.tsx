import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageSquare, Github, Twitter, Linkedin, Loader2 } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import { useNewsletter } from '@/hooks/useNewsletter';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { formData, isLoading, handleInputChange, handleSubmit } = useContactForm();
  const { email, setEmail, isLoading: newsletterLoading, handleSubscribe } = useNewsletter();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageSquare, href: '#', label: 'Discord' }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to revolutionize your business with AI? Let's start a conversation about how Aveon AI can transform your operations.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="glass-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl p-3">
                  <Mail className="w-full h-full text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Direct Contact</h4>
                  <p className="text-foreground/60">Get in touch directly</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-foreground/80">hello@aveon.ai</p>
                <p className="text-foreground/80">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Office Location */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold mb-3">Headquarters</h4>
              <p className="text-foreground/80">
                123 AI Innovation Drive<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-secondary hover:bg-primary rounded-xl p-3 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-full h-full text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <p className="text-foreground/80 mb-4">
                Subscribe to our newsletter for the latest AI insights and product updates.
              </p>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                />
                <motion.button
                  whileHover={{ scale: newsletterLoading ? 1 : 1.05 }}
                  whileTap={{ scale: newsletterLoading ? 1 : 0.95 }}
                  className="glow-button px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={newsletterLoading}
                >
                  {newsletterLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}