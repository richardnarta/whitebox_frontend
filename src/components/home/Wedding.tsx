import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight } from '../../lib/animations';
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../components/ui/carousel"

// An array of your wedding photos. Add more here.
const weddingImages = [
  "/wedding.jpg",
  "/wedding2.jpg",
  "/wedding3.jpg",
  "/wedding4.jpg",
  "/wedding5.jpg",
];

const WeddingsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  
  // MODIFIED: State to hold the carousel's API
  const [api, setApi] = React.useState<CarouselApi>()

  return (
    <section id="wedding" className="bg-brand-white py-16 sm:py-24">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            variants={fadeInLeft(0.8)}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black leading-tight">
              Your Wedding, <br />
              <span className="text-brand-gold-600">Perfectly Framed</span>.
            </h2>
            <p className="mt-6 text-lg text-neutral-700 max-w-xl mx-auto lg:mx-0">
              We specialize in capturing the soul of your wedding day. From the quiet, intimate glances to the grand, joyous celebrations, our team is dedicated to preserving every emotion with artistry and professionalism.
            </p>
            <p className="mt-4 font-script text-2xl text-neutral-800 underline max-w-xl mx-auto lg:mx-0">
              "Where every glance becomes a timeless story."
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-brand-gold-500 to-brand-gold-600 hover:from-brand-gold-600 hover:to-brand-gold-700 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl">
                Check Our Wedding Packages
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="w-full order-1 lg:order-2"
            variants={fadeInRight(0.8)}
          >
            <Carousel
              // MODIFIED: Pass the setApi function to the carousel
              setApi={setApi}
              plugins={[plugin.current]}
              // MODIFIED: Added opts prop for infinite looping
              opts={{
                loop: true,
              }}
              className="w-full"
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.reset()}
            >
              <CarouselContent>
                {weddingImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={src}
                        alt={`Wedding photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* MODIFIED: Pass the api state down to the dots component */}
              <CarouselDots api={api} />
            </Carousel>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
};

// MODIFIED: Custom component now accepts the API as a prop
function CarouselDots({ api }: { api: CarouselApi | undefined }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect() // Set initial state

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="flex justify-center gap-2 mt-4">
      {api?.scrollSnapList().map((_, index) => (
        <button
          key={index}
          onClick={() => api.scrollTo(index)}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            index === selectedIndex ? 'w-6 bg-brand-gold-500' : 'bg-brand-gold-200'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default WeddingsSection;