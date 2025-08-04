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
  return;
}