import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full flex items-center justify-center"
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-96"
      >
        <img
          src="https://i.imgur.com/XYZabc.png" // Replace with actual logo URL
          alt="SCI Global"
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;