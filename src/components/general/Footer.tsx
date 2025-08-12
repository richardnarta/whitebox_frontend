import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const serviceLinks = [
  { name: "Videography", href: "#" },
  { name: "Portraiture", href: "#" },
  { name: "Studio", href: "#" },
  { name: "Printing", href: "#" },
];

// MODIFIED: Combined all social links into one array for consistent styling and ordering
const socialLinks = [
  { service: "WhatsApp", handle: "General Inquiries", href: "https://wa.me/6282180395039", icon: FaWhatsapp },
  { service: "Wedding Videography", handle: "@whiteboxstudio", href: "https://www.instagram.com/whiteboxstudio", icon: FaInstagram },
  { service: "Portraiture", handle: "@whiteboxportraiture", href: "https://www.instagram.com/whiteboxportraiture", icon: FaInstagram },
  { service: "Studio Rent", handle: "@whiteboxstudiorent", href: "https://www.instagram.com/whiteboxstudiorent", icon: FaInstagram },
  { service: "Printing", handle: "@whiteboxprinting", href: "https://www.instagram.com/whiteboxprinting", icon: FaInstagram },
  { service: "TikTok", handle: "@whitebox_studio", href: "https://www.tiktok.com/@whitebox_studio", icon: FaTiktok },
];

const Footer = () => {
  return (
    <footer className="bg-brand-black text-neutral-300">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* MODIFIED: Added logo section at the top */}
        <div className="pb-8 mb-8 border-b border-neutral-700">
            <a href="#" className="font-serif text-2xl font-bold text-white hover:text-brand-gold-300 transition-colors">
              WHITEBOX
            </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1: Service Links */}
          <motion.div variants={fadeInUp()}>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-gold-300 transition-colors">
                    <span className="font-serif text-lg">Whitebox</span>{' '}
                    <span className="font-script text-xl">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Social Media */}
          <motion.div variants={fadeInUp(0.2)}>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <ul className="space-y-4">
              {socialLinks.map(link => (
                <li key={link.handle}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <link.icon className="text-neutral-400 mr-3 group-hover:text-brand-gold-300 transition-colors flex-shrink-0" size={20} />
                    <div>
                      <span className="block text-sm font-medium text-white group-hover:text-brand-gold-300 transition-colors">{link.service}</span>
                      <span className="block text-xs text-neutral-400">{link.handle}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Google Map */}
          <motion.div 
            variants={fadeInUp(0.4)}
          >
            <h3 className="font-semibold text-white mb-4">Our Location</h3>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507802!3d-6.194741395501738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1622548268853!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black/50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Whitebox Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;