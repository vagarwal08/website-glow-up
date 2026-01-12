import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Client First',
    description: 'Your success is our priority. We tailor solutions to meet your unique business needs.',
  },
  {
    icon: Users,
    title: 'Handholding',
    description: 'We walk with you through every step of implementation and beyond.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Approach',
    description: 'Real-world solutions that work, not just theoretical frameworks.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering quality in every engagement with attention to detail.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Young Team,
              <br />
              <span className="text-gradient-gold">Big Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              VA ConsulTech is a consultancy company empowered by technology. Founded by 
              <strong className="text-foreground"> Puja Agarwal</strong>, we bring the 
              experience of working with large organizations to help startups and SMEs 
              navigate complex financial landscapes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We combine deep domain expertise in accounting, IFRS, ESG, and forensic 
              analysis with modern automation tools to deliver solutions that scale with 
              your business.
            </p>

            {/* Founder Highlight */}
            <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                <span className="text-gold-500 font-serif font-bold text-xl">PA</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Puja Agarwal</h4>
                <p className="text-sm text-muted-foreground">Founder & Principal Consultant</p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:shadow-elegant transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-100 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors">
                  <value.icon className="w-6 h-6 text-gold-500 group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
