import React from 'react';
import { useForm } from 'react-hook-form';

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
    // In a real application, this would send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Votre demande a été envoyée avec succès. Nous vous contacterons prochainement.');
    
    // Close the form
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <p className="text-gray-600 mb-4">
        Complétez ce formulaire pour en savoir plus sur {solutionTitle.toLowerCase()}.
      </p>
      
      {fields.map((field) => (
        <div key={field.name} className="space-y-1">
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              {...register(field.name, { required: true })}
              className={`w-full px-3 py-2 border ${errors[field.name] ? 'border-error-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
              rows={3}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              {...register(field.name, { required: true })}
              className={`w-full px-3 py-2 border ${errors[field.name] ? 'border-error-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
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
              className={`w-full px-3 py-2 border ${errors[field.name] ? 'border-error-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            />
          )}
          
          {errors[field.name] && (
            <p className="text-error-500 text-xs mt-1">Ce champ est requis</p>
          )}
        </div>
      ))}
      
      <div className="pt-4 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default SolutionForm;