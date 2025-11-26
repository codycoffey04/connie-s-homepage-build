import { motion } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  scale?: boolean;
  width?: number;
  height?: number;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "lazy" | "eager";
}

export const AnimatedImage = ({ 
  src,
  alt,
  delay = 0, 
  scale = false,
  className = "",
  width,
  height,
  fetchPriority = "auto",
  loading = "lazy",
}: AnimatedImageProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      width={width}
      height={height}
      initial={{ opacity: 0, scale: scale ? 0.95 : 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7,
        delay,
        ease: "easeOut" 
      }}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
    />
  );
};
