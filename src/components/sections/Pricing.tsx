import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Zap } from 'lucide-react';
const pricingPlans = [{
  name: 'Basic',
  price: 'Free',
  description: 'Perfect for individuals and small projects',
  features: ['AI chatbot with basic responses', 'Recommendation engine', 'Basic analytics dashboard', 'Community support', 'Up to 1,000 API calls/month'],
  icon: Check,
  popular: false,
  cta: 'Get Started Free'
}, {
  name: 'Premium',
  price: '$9.99',
  period: '/month',
  description: 'For growing businesses and power users',
  features: ['Advanced automation workflows', 'Custom AI agent training', 'Full dashboard access', 'Priority email support', 'Up to 50,000 API calls/month', 'Multi-platform integrations', 'Advanced analytics'],
  icon: Star,
  popular: true,
  cta: 'Start Premium Trial'
}, {
  name: 'Enterprise',
  price: 'Contact',
  description: 'Custom solutions for large organizations',
  features: ['Unlimited API access', 'Custom AI agent development', 'Full CRM integration', 'Dedicated account manager', 'White-label solutions', 'Advanced security features', 'Custom compliance options', '24/7 phone support'],
  icon: Zap,
  popular: false,
  cta: 'Contact Sales'
}];
export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`glass-card p-8 h-full relative ${plan.popular ? 'border-primary/50' : ''}`}>
                <div className="text-center mb-6">
                  <plan.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-foreground/60">{plan.period}</span>}
                  </div>
                  <p className="text-foreground/70">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/25' 
                    : 'border border-primary/20 text-primary hover:bg-primary/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}