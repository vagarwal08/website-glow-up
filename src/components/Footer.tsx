import { Phone, Mail, MapPin } from 'lucide-react';

const services = [
  'Accounting Advisory',
  'Forensic Accounting',
  'ESG Advisory',
  'IFRS Implementation',
  'Process Automation',
  'Data Analytics',
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-gold-100">
      <div className="container-narrow mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                <span className="text-navy-900 font-serif font-bold text-xl">VA</span>
              </div>
              <span className="font-serif font-bold text-xl">ConsulTech</span>
            </div>
            <p className="text-gold-200/70 text-sm mb-6 leading-relaxed">
              Empowering businesses with technology-driven financial consulting. 
              Your trusted partner for growth and compliance.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+918481886868"
                className="flex items-center gap-3 text-sm text-gold-200/70 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 84818 86868
              </a>
              <a
                href="mailto:vaconsultech@gmail.com"
                className="flex items-center gap-3 text-sm text-gold-200/70 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                vaconsultech@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-gold-200/70">
                <MapPin className="w-4 h-4" />
                India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold-100 mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gold-200/70 hover:text-gold-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold-100 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gold-200/70 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gold-100 mb-6">Stay Updated</h4>
            <p className="text-sm text-gold-200/70 mb-4">
              Subscribe to our newsletter for industry insights and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-navy-800 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 text-sm focus:outline-none focus:border-gold-500/50"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gold-500 text-navy-900 font-semibold text-sm hover:bg-gold-400 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-500/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gold-200/50">
            © {new Date().getFullYear()} VA ConsulTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gold-200/50 hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gold-200/50 hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
