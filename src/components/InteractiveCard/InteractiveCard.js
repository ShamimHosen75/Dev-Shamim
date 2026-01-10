import { motion } from 'framer-motion';

const InteractiveCard = ({ children, className = "", hoverScale = 1.05, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: hoverScale, y: -8 }}
      transition={{
        duration: 0.5,
        delay,
        type: 'spring',
        stiffness: 200,
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative ${className}`}
    >
      {/* Animated background blur effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-cyan-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
        whileHover={{
          background: 'linear-gradient(to right, #3b82f6/20, #06b6d4/20)',
        }}
      />
      
      {/* Main card content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default InteractiveCard;
