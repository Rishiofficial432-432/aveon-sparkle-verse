import { useRef } from 'react';
import { useInView } from 'framer-motion';
export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        {/* Empty pricing section */}
      </div>
    </section>
  );
}