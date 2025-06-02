import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormField {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

interface SolutionFormProps {
  fields: FormField[];
  solutionTitle: string;
  onClose: () => void;
}

const SolutionForm: React.FC<SolutionFormProps> = ({ fields, solutionTitle, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    alert('Votre demande a été envoyée avec succès. Nous vous contacterons prochainement.');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Complétez ce formulaire pour en savoir plus sur {solutionTitle.toLowerCase()}.
      </p>
      
      {fields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-1"
        >
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {field.label}
          </label>
          
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              {...register(field.name, { required: true })}
              className={`w-full px-3 py-2 bg-white dark:bg-gray-700 border ${
                errors[field.name] ? 'border-error-500' : 'border-gray-300 dark:border-gray-600'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
              rows={3}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              {...register(field.name, { required: true })}
              className={`w-full px-3 py-2 bg-white dark:bg-gray-700 border ${
                errors[field.name] ? 'border-error-500' : 'border-gray-300 dark:border-gray-600'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
            >
              <option value="">Sélectionner...</option>
              {field.options?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type}
              {...register(field.name, { required: true })}
              className={`w-full px-3 py-2 bg-white dark:bg-gray-700 border ${
                errors[field.name] ? 'border-error-500' : 'border-gray-300 dark:border-gray-600'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white`}
            />
          )}
          
          {errors[field.name] && (
            <p className="text-error-500 text-xs mt-1">Ce champ est requis</p>
          )}
        </motion.div>
      ))}
      
      <div className="pt-4 flex justify-end space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          Annuler
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
        >
          Envoyer
        </motion.button>
      </div>
    </form>
  );
};

export default SolutionForm;