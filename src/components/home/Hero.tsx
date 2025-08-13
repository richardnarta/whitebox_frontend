import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, fadeIn } from '../../lib/animations';
import TypingAnimation from '../../components/general/Typing';

const HeroSection = () => {
  return (
    <motion.section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* MODIFIED: Removed 'items-center' and added 'lg:items-center' for specific desktop alignment */}
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 lg:items-center">

        {/* --- Left Column: Text Content --- */}
        <div className="text-center lg:text-left z-10 order-2 lg:order-1">
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight"
            variants={fadeInUp()}
          >
            Capturing <span className="text-brand-gold-600">Life's</span><br/>Priceless Moments.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-neutral-700 max-w-lg mx-auto lg:mx-0"
            variants={fadeInUp(0.5, 30)}
          >
            From wedding vows to family portraits, we craft timeless visual stories.
          </motion.p>

          <TypingAnimation
            text="Elegance in every frame."
            className="font-script text-2xl text-brand-gold-500 mt-4 h-8 mx-auto lg:mx-0"
            speedMultiplier={1.8}
          />

          <motion.div variants={fadeInUp(0.5, 20)}>
            {/* MODIFIED: Changed button to an <a> tag to enable scrolling */}
            <a
              href="#wedding"
              className="inline-block mt-8 px-8 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-brand-gold-500 to-brand-gold-600 hover:from-brand-gold-600 hover:to-brand-gold-700 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* --- Right Column: Scalable Image Composition --- */}
        <motion.div
          className="order-1 lg:order-2 w-full"
          variants={fadeIn()}
        >
          <div className="relative aspect-[4/3] w-full">
            
            <motion.div
              className="absolute w-[80%] h-[60%] top-0 left-[10%] z-0 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
              variants={fadeIn(0.3)}
            >
              <img src="/hero3.jpg" alt="Background View" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              className="absolute w-[45%] h-[75%] top-[15%] left-0 z-10 rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-2"
              variants={fadeIn(0.5)}
            >
              <img src="/hero2.jpg" alt="Portrait" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              className="absolute w-[65%] h-[65%] top-[40%] left-[30%] z-20 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
              variants={fadeIn(1)}
            >
              <img src="/hero1.jpg" alt="Wedding" className="w-full h-full object-cover" />
            </motion.div>
            
          </div>
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default HeroSection;
