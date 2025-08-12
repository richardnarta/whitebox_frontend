import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight } from '../../lib/animations';
import { FaInstagram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-brand-gold-50/50 py-16 sm:py-24">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* --- Left Column: Image --- */}
          <motion.div 
            className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl"
            variants={fadeInLeft(0.8)}
          >
            <img
              src="/about.webp"
              alt="Whitebox Studio Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* --- Right Column: Text Content --- */}
          {/* MODIFIED: Text is now centered on mobile, left-aligned on desktop */}
          <motion.div 
            className="text-center lg:text-left"
            variants={fadeInRight(0.8)}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black leading-tight">
              Artistry in Vision, <br />
              <span className="text-brand-gold-600">Excellence in Craft</span>.
            </h2>
            <p className="mt-6 text-lg text-neutral-700 max-w-xl mx-auto lg:mx-0">
              At Whitebox, we believe photography is more than just images; it's the art of seeing. Our approach combines technical mastery with a deep understanding of light, composition, and emotion to create imagery that is both stunning and deeply personal.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-black mb-4">Meet the Photographers</h3>
              {/* MODIFIED: Buttons are centered on mobile, left-aligned on desktop */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://www.instagram.com/han_whitebox/" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 font-semibold text-brand-gold-700 border-2 border-brand-gold-300 rounded-md hover:bg-brand-gold-300 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram className="mr-3" />
                  Handry
                </a>
                <a 
                  href="https://www.instagram.com/heryadley/" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 font-semibold text-brand-gold-700 border-2 border-brand-gold-300 rounded-md hover:bg-brand-gold-300 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram className="mr-3" />
                  Hery
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;