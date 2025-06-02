import React from 'react';
import { ArrowDown } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
            La télémédecine au service de l'Afrique
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up">
            DIGIHEALTH4AFRICA est une entreprise innovante dédiée au renforcement des systèmes 
            de santé en Afrique grâce à la télémédecine et à des solutions mobiles adaptées 
            aux réalités locales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a 
              href="#solutions" 
              className="btn bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors duration-300"
            >
              Découvrir nos solutions
            </a>
            <a 
              href="#contact" 
              className="btn bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors duration-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#solutions" className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Découvrir</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;