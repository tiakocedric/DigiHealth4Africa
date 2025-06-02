import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "La télémédecine : une révolution pour l'Afrique rurale",
      excerpt: "Comment les nouvelles technologies permettent de désenclaver médicalement les zones rurales africaines...",
      image: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      image: "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "18 mars 2025",
      author: "Martine Koné"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
            Actualités
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières actualités et articles sur la santé digitale en Afrique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200">
            Voir tous les articles
          </button>
        </div>
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
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
        <a 
          href="#" 
          className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
        >
          Lire la suite
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </article>
  );
};

export default Blog;