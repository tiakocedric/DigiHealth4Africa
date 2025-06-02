import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
    alert('Votre message a été envoyé avec succès. Nous vous contacterons prochainement.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vous souhaitez en savoir plus sur nos solutions ou discuter d'un projet ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-gray-900">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: true })}
                    className={`w-full px-3 py-2 border ${errors.name ? 'border-error-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  />
                  {errors.name && (
                    <p className="text-error-500 text-xs mt-1">Ce champ est requis</p>
                  )}
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="function" className="block text-sm font-medium text-gray-700">
                    Fonction
                  </label>
                  <input
                    id="function"
                    type="text"
                    {...register('function')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: true })}
                    className={`w-full px-3 py-2 border ${errors.email ? 'border-error-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  />
                  {errors.email && (
                    <p className="text-error-500 text-xs mt-1">Ce champ est requis</p>
                  )}
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                  Organisation
                </label>
                <input
                  id="organization"
                  type="text"
                  {...register('organization')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: true })}
                  className={`w-full px-3 py-2 border ${errors.message ? 'border-error-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  rows={4}
                ></textarea>
                {errors.message && (
                  <p className="text-error-500 text-xs mt-1">Ce champ est requis</p>
                )}
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-gray-900">Nos coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600">37 Avenue Duguay Trouin, 93150 Le Blanc Mesnil, France</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <p className="text-gray-600">+33 7 53 45 82 24</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contact@digihealth4africa.fr</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-gray-900">Suivez-nous</h3>
              
              <div className="flex space-x-4">
                <SocialButton icon={<Facebook className="h-5 w-5" />} label="Facebook" />
                <SocialButton icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
                <SocialButton icon={<Twitter className="h-5 w-5" />} label="Twitter" />
                <SocialButton icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label }) => {
  return (
    <a 
      href="#" 
      className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Contact;