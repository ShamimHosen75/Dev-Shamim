import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className = "", width, height, placeholder = "bg-slate-800" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setImageSrc(src); // Still show the image even if error
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
      style={{ aspectRatio: width ? `${width}/${height}` : 'auto' }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div className={`absolute inset-0 ${placeholder} animate-pulse`} />
      )}
      
      {/* Actual Image */}
      <motion.img
        src={imageSrc}
        alt={alt}
        className={`${className} w-full h-full object-cover`}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        width={width}
        height={height}
      />
    </motion.div>
  );
};

export default LazyImage;
