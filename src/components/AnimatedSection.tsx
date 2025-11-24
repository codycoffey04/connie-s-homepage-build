import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.6 
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
