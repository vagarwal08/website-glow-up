import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cog, 
  FileText, 
  Leaf, 
  Globe, 
  Search, 
  ClipboardCheck,
  ScrollText,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Streamline your operations with intelligent automation solutions that reduce manual effort and increase accuracy.',
    color: 'bg-teal-100',
    iconColor: 'text-teal-500',
  },
  {
    icon: FileText,
    title: 'Accounting Advisory',
    description: 'Expert guidance on complex accounting matters, financial reporting, and compliance requirements.',
    color: 'bg-gold-100',
    iconColor: 'text-gold-500',
  },
  {
    icon: Leaf,
    title: 'ESG Advisory',
    description: 'Navigate environmental, social, and governance frameworks to build sustainable business practices.',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Globe,
    title: 'IFRS Implementation',
    description: 'Seamless transition to International Financial Reporting Standards with minimal business disruption.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Search,
    title: 'Forensic Accounting',
    description: 'Detect fraud, investigate financial irregularities, and provide litigation support services.',
    color: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Process Audit',
    description: 'Comprehensive review of your business processes to identify gaps and improvement opportunities.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: ScrollText,
    title: 'SOP Drafting',
    description: 'Create standardized operating procedures that ensure consistency and operational excellence.',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization.',
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive financial and business consulting services tailored for 
            startups, SMEs, and growing enterprises.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-xl border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-1 text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button variant="gold" size="lg">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
