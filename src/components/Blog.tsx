import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import newTechRevolutionImage from '../images/new-tech-revolution.png';
import tchadMissionImage from '../images/tchad-mission.png';
import santeImage from '../images/sante.png';
import remoteHealthImage from '../images/remote-heatlh.png';
import clinicHomeImage from '../images/clinic-home.jpg';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: "La télémédecine : une révolution pour l'Afrique rurale",
      excerpt: "Comment les nouvelles technologies permettent de désenclaver médicalement les zones rurales africaines...",
      image: newTechRevolutionImage,
      date: "15 mai 2025",
      author: "Dr. Aminata Diallo"
    },
    {
      id: 2,
      title: "Comment nos conteneurs sauvent des vies dans les zones de conflit",
      excerpt: "Retour sur le déploiement de conteneurs médicalisés dans l'est de la RDC et leur impact sur les populations déplacées...",
      image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "3 avril 2025",
      author: "Jean Ndongo"
    },
    {
      id: 3,
      title: "Retour sur notre mission au Tchad",
      excerpt: "Formation des agents de santé locaux et installation de 3 mallettes de télémédecine dans la région du Lac Tchad...",
      image: tchadMissionImage,
      date: "18 mars 2025",
      author: "Martine Koné"
    },
    {
      id: 4,
      title: "L'impact de la télémédecine sur la santé maternelle en Afrique",
      excerpt: "Comment nos solutions numériques améliorent le suivi des grossesses et réduisent la mortalité maternelle dans les zones rurales...",
      image: santeImage,
      date: "28 février 2025",
      author: "Dr. Fatoumata Sow"
    },
    {
      id: 5,
      title: "Lancement de notre programme d'éducation médicale à distance",
      excerpt: "Présentation de notre nouvelle plateforme d'apprentissage en ligne pour les professionnels de santé africains...",
      image: remoteHealthImage,
      date: "15 février 2025",
      author: "Dr. Moussa Diop"
    },
    {
      id: 6,
      title: "Notre partenariat avec l'OMS pour la santé numérique en Afrique",
      excerpt: "Détails de notre collaboration avec l'Organisation Mondiale de la Santé pour améliorer l'accès aux soins dans les pays africains...",
      image: clinicHomeImage,
      date: "31 janvier 2025",
      author: "Dr. Aminata Diallo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
            Actualités
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières actualités et articles sur la santé digitale en Afrique.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
          >
            Voir tous les articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
        <motion.img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>Par {post.author}</span>
        </div>
        <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <motion.a 
          href="#" 
          className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Lire la suite
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </div>
    </motion.article>
  );
};

export default Blog;