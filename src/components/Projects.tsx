import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import formationImage from '../images/formation.png';
import nordMissionImage from '../images/nord-mission.png';
import partenartImage from '../images/partenart.png';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Mission pilote dans le Nord-Cameroun",
      description: "Déploiement de mallettes de télémédecine dans 5 centres de santé ruraux, formation des agents de santé et mise en place d'un réseau de télé-expertise.",
      image: nordMissionImage,
      stats: [
        { label: "Centres équipés", value: 5 },
        { label: "Patients bénéficiaires", value: 1200, suffix: "+" },
        { label: "Téléconsultations", value: 450 }
      ]
    },
    {
      id: 2,
      title: "Formation de 40 agents de santé",
      description: "Programme de formation à l'utilisation des outils de télémédecine pour les professionnels de santé locaux, intégrant une composante de suivi et de mentorat.",
      image: formationImage,
      stats: [
        { label: "Agents formés", value: 40 },
        { label: "Heures de formation", value: 120 },
        { label: "Taux de satisfaction", value: 92, suffix: "%" }
      ]
    },
    {
      id: 3,
      title: "Partenariat ONG pour 10 centres de santé ruraux",
      description: "Collaboration avec une ONG internationale pour équiper des centres de santé en zones rurales avec des solutions de télémédecine adaptées.",
      image: partenartImage,
      stats: [
        { label: "Centres équipés", value: 10 },
        { label: "Population couverte", value: 25000 },
        { label: "Médecins à distance", value: 12 }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
            Nos réalisations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des projets concrets qui transforment l'accès aux soins et améliorent la vie des populations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="lg:w-1/2 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-bold text-primary-600">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-heading font-semibold mb-6 text-center text-gray-900">
            Nos principaux résultats
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Achievement text="Plus de 3000 patients pris en charge grâce à la télémédecine" />
            <Achievement text="15 centres de santé équipés en solutions digitales" />
            <Achievement text="Réduction de 75% des évacuations sanitaires non-nécessaires" />
            <Achievement text="Formation de 80+ professionnels de santé aux outils numériques" />
            <Achievement text="Partenariats avec 5 ministères de la santé en Afrique" />
            <Achievement text="Réseau de 30+ médecins spécialistes pour la télé-expertise" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface AchievementProps {
  text: string;
}

const Achievement: React.FC<AchievementProps> = ({ text }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg hover:border-primary-200 hover:bg-primary-50 transition-colors duration-300"
    >
      <CheckCircle className="h-6 w-6 text-success-500 flex-shrink-0 mt-0.5" />
      <p className="text-gray-700">{text}</p>
    </motion.div>
  );
};

export default Projects;