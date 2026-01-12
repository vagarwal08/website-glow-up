import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const reasons = [
  {
    number: '01',
    title: 'Experienced Team',
    description: 'Our consultants bring experience from Big 4 firms and Fortune 500 companies, now accessible to businesses of all sizes.',
  },
  {
    number: '02',
    title: 'Technology-Driven',
    description: 'We leverage modern tools and automation to deliver faster, more accurate results at competitive prices.',
  },
  {
    number: '03',
    title: 'Startup-Friendly',
    description: 'We understand the unique challenges of growing businesses and offer flexible engagement models.',
  },
  {
    number: '04',
    title: 'End-to-End Support',
    description: 'From strategy to implementation, we provide complete handholding throughout your journey.',
  },
];

const testimonial = {
  quote: "VA ConsulTech transformed our financial processes. Their practical approach and deep expertise helped us achieve IFRS compliance ahead of schedule.",
  author: "CFO",
  company: "Leading Fintech Startup",
};

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="section-padding bg-navy-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold-100 mb-6">
            The VA ConsulTech <span className="text-gradient-gold">Advantage</span>
          </h2>
          <p className="text-gold-200/70 text-lg max-w-2xl mx-auto">
            We combine enterprise-level expertise with startup agility to deliver 
            exceptional value for growing businesses.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-xl bg-navy-800/50 border border-gold-500/10 hover:border-gold-500/30 transition-colors"
            >
              <div className="text-4xl font-serif font-bold text-gold-500/30 flex-shrink-0">
                {reason.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold-100 mb-2">{reason.title}</h3>
                <p className="text-gold-200/60 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <Quote className="w-12 h-12 text-gold-500/30 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-6 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
          <div>
            <div className="font-semibold text-foreground">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.company}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
