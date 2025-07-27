import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for individuals and small projects',
    features: [
      'AI chatbot with basic responses',
      'Recommendation engine',
      'Basic analytics dashboard',
      'Community support',
      'Up to 1,000 API calls/month'
    ],
    icon: Check,
    popular: false,
    cta: 'Get Started Free'
  },
  {
    name: 'Premium',
    price: '$9.99',
    period: '/month',
    description: 'For growing businesses and power users',
    features: [
      'Advanced automation workflows',
      'Custom AI agent training',
      'Full dashboard access',
      'Priority email support',
      'Up to 50,000 API calls/month',
      'Multi-platform integrations',
      'Advanced analytics'
    ],
    icon: Star,
    popular: true,
    cta: 'Start Premium Trial'
  },
  {
    name: 'Enterprise',
    price: 'Contact',
    description: 'Custom solutions for large organizations',
    features: [
      'Unlimited API access',
      'Custom AI agent development',
      'Full CRM integration',
      'Dedicated account manager',
      'White-label solutions',
      'Advanced security features',
      'Custom compliance options',
      '24/7 phone support'
    ],
    icon: Zap,
    popular: false,
    cta: 'Contact Sales'
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className={`glass-card relative overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                plan.popular ? 'from-primary/10 to-accent/10' : 'from-transparent to-transparent'
              } opacity-50`}></div>

              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl ${
                    plan.popular ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                  } p-4 mx-auto`}>
                    <plan.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                
                {/* Description */}
                <p className="text-foreground/70 text-center mb-6">{plan.description}</p>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    {plan.period && <span className="text-foreground/60 ml-2">{plan.period}</span>}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'glow-button'
                      : 'glass-card hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/60">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}