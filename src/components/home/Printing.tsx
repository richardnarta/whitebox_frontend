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

// An array of your printing product photos.
const printingImages = [
  "/printing.jpg",
  "/printing2.jpg",
  "/printing3.jpg",
];

const PrintingSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4200, stopOnInteraction: true })
  )
  
  const [api, setApi] = React.useState<CarouselApi>()

  return (
    // Alternating background color
    <section id="printing" className="bg-brand-gold-50/50 py-16 sm:py-24">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* --- Left Column: Image Carousel --- */}
          <motion.div 
            className="w-full order-1"
            variants={fadeInLeft(0.8)}
          >
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              opts={{ loop: true }}
              className="w-full"
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.reset()}
            >
              <CarouselContent>
                {printingImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={src}
                        alt={`Printing product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots api={api} />
            </Carousel>
          </motion.div>

          {/* --- Right Column: Text Content --- */}
          <motion.div 
            className="text-center lg:text-left order-2"
            variants={fadeInRight(0.8)}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black leading-tight">
              Tangible Memories, <br />
              <span className="text-brand-gold-600">Printed to Perfection</span>.
            </h2>
            <p className="mt-6 text-lg text-neutral-700 max-w-xl mx-auto lg:mr-auto lg:ml-0">
              Transform your digital moments into lasting treasures. We offer premium printing services with exceptional color accuracy and archival quality for a wide range of products.
            </p>
            <p className="mt-4 font-semibold text-neutral-600 max-w-xl mx-auto lg:mr-auto lg:ml-0">
              Wedding Books • Canvas • Photoprints • Frames • Stickers • Acrylic & UV Prints
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-brand-gold-500 to-brand-gold-600 hover:from-brand-gold-600 hover:to-brand-gold-700 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl">
                Get Your Printing Ready
              </button>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
};

// Reusable Carousel Dots component
function CarouselDots({ api }: { api: CarouselApi | undefined }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    api.on("select", onSelect)
    onSelect()
    return () => { api.off("select", onSelect) }
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

export default PrintingSection;