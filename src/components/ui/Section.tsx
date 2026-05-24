import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export function Section({ children, id, className = '', delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative py-8 ${className}`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block"></div>
      <div className="md:pl-8">
        {children}
      </div>
    </motion.section>
  );
}
