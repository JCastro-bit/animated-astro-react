import { motion } from 'framer-motion';

export default function Introduction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          Animation Showcase
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-100"
          variants={itemVariants}
        >
          Exploring modern web animations with React, Framer Motion, and Spring
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <a 
            href="#features" 
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            View Demos
          </a>
          <a 
            href="https://github.com/yourusername/animated-astro-react" 
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
