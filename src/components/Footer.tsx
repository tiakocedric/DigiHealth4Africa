import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-heading font-semibold">
                <span className="text-primary-400">DIGI</span>
                <span className="text-accent-400">HEALTH</span>
                <span className="text-primary-400">4</span>
                <span className="text-accent-400">AFRICA</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              La télémédecine au service de l'Afrique.
              Des solutions innovantes pour renforcer les systèmes de santé.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} DIGIHEALTH4AFRICA. Tous droits réservés.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">Mallettes de télémédecine</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">Bornes de télémédecine</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">Véhicules médicalisés</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">Conteneurs santé</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">Télé-expertise</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">Évacuations sanitaires</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">À propos</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">Réalisations</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">Actualités</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              37 Avenue Duguay Trouin<br />
              93150 Le Blanc Mesnil<br />
              France
            </address>
            <p className="mt-2">
              <a href="tel:+33753458224" className="text-gray-400 hover:text-white transition-colors duration-200">+33 7 53 45 82 24</a>
            </p>
            <p className="mt-1">
              <a href="mailto:contact@digihealth4africa.fr" className="text-gray-400 hover:text-white transition-colors duration-200">contact@digihealth4africa.fr</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;