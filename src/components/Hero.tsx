import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { AfricaIcon } from './CustomIcons';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/50 dark:from-gray-900/90 dark:to-gray-800/70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <AfricaIcon className="w-16 h-16" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              La télémédecine au service de l'Afrique
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            DIGIHEALTH4AFRICA est une entreprise innovante dédiée au renforcement des systèmes 
            de santé en Afrique grâce à la télémédecine et à des solutions mobiles adaptées 
            aux réalités locales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#solutions" 
              className="btn bg-accent-500 hover:bg-accent-600 dark:bg-accent-600 dark:hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos solutions
            </a>
            <a 
              href="#contact" 
              className="btn bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#solutions" className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Découvrir</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;