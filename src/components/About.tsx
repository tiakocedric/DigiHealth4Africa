import React from 'react';
import { Users, Eye, Leaf } from 'lucide-react';
import doctorImage from '../images/docor.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une équipe dévouée à l'amélioration de l'accès aux soins de santé en Afrique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">À propos</h3>
            <p className="text-gray-600 mb-4">
              DIGIHEALTH4AFRICA a été fondée par une infirmière française d'origine camerounaise 
              et un médecin africain ayant exercé en France et au Cameroun, avec la conviction que 
              les innovations en santé peuvent transformer l'accès aux soins en Afrique.
            </p>
            <p className="text-gray-600">
              Notre équipe est composée de professionnels de santé, d'ingénieurs, de logisticiens 
              et d'experts en santé digitale unis par une même mission : rapprocher les soins de 
              santé des populations, même dans les zones les plus reculées.
            </p>
          </div>
          <div className="relative">
            <img 
              src={doctorImage} 
              alt="L'équipe DIGIHEALTH4AFRICA" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
              <p className="font-heading font-semibold">Fondée par des professionnels de santé avec une expérience en Afrique et en Europe</p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <Eye className="h-20 w-20 text-primary-600" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">Notre vision</h3>
              <p className="text-gray-600">
                Un continent africain où chaque citoyen, où qu'il se trouve, peut accéder à une expertise 
                médicale de qualité. Nous croyons en un avenir où la distance ne sera plus un obstacle 
                à la santé, et où la technologie servira à rendre les soins accessibles à tous.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center text-gray-900">Nos valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard 
              title="Innovation responsable"
              description="Des solutions technologiques adaptées aux contextes locaux et aux besoins réels."
            />
            <ValueCard 
              title="Accessibilité des soins"
              description="Réduire les barrières géographiques et financières pour un accès équitable à la santé."
            />
            <ValueCard 
              title="Solidarité médicale"
              description="Créer des ponts entre professionnels de santé pour un partage d'expertise bénéfique."
            />
            <ValueCard 
              title="Respect des contextes locaux"
              description="Des solutions ancrées dans les réalités culturelles et socio-économiques africaines."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent-500 hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-lg font-heading font-semibold mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;