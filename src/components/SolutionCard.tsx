import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SolutionForm from './SolutionForm';

interface FormField {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

interface Solution {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  formFields: FormField[];
}

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors duration-300"
    >
      <div className="p-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4 text-primary-600 dark:text-primary-400"
        >
          {solution.icon}
        </motion.div>
        <h3 className="text-xl font-heading font-semibold text-center mb-3 text-gray-900 dark:text-white">
          {solution.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          {solution.description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleForm}
          className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          {solution.action}
        </motion.button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white">
                  {solution.title}
                </h3>
                <button 
                  onClick={toggleForm}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  aria-label="Fermer"
                >
                  ✕
                </button>
              </div>
              <SolutionForm fields={solution.formFields} solutionTitle={solution.title} onClose={toggleForm} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SolutionCard;