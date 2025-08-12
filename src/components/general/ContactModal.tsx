import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import { motion } from 'framer-motion';

const WHATSAPP_ADMIN_NUMBER = '6282180395039';
const WHATSAPP_HANDRY_NUMBER = '628121733788';
const WHATSAPP_HERY_NUMBER = '6285368418235';

const contactLinks = [
  { icon: FaWhatsapp, text: 'Admin', href: `https://wa.me/${WHATSAPP_ADMIN_NUMBER}` },
  { icon: FaWhatsapp, text: 'Handry', href: `https://wa.me/${WHATSAPP_HANDRY_NUMBER}` },
  { icon: FaWhatsapp, text: 'Hery', href: `https://wa.me/${WHATSAPP_HERY_NUMBER}` },
  { icon: FaInstagram, text: '@whitebox_studio', href: 'https://www.instagram.com/whitebox_studio' },
  { icon: FaTiktok, text: '@whitebox_studio', href: 'https://www.tiktok.com/@whitebox_studio' },
];

// This component will wrap our trigger buttons
export function ContactModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-brand-white border-neutral-200">
        <DialogHeader>
          <DialogTitle className="font-formal text-2xl text-brand-black text-center pt-4">Find Whitebox on</DialogTitle>
        </DialogHeader>
        {/* 3. Wrap the list in a motion.div to act as the parent container */}
        <motion.div 
          className="grid gap-4 py-4"
          variants={staggerContainer(0.1)} // Use our stagger container
          initial="hidden"
          animate="visible" // Animate when it becomes visible
        >
          {contactLinks.map((contact, index) => (
            // 4. Convert the 'a' tag to 'motion.a' and apply the child animation
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg hover:bg-brand-gold-100 transition-colors group border border-neutral-200"
              variants={fadeInUp(0.5)} // Use our fadeInUp animation
            >
              <contact.icon className="h-7 w-7 text-brand-black mr-4 group-hover:text-brand-gold-700 transition-colors" />
              <span className="text-brand-black font-medium">{contact.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}