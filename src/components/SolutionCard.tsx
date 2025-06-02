import React, { useState } from 'react';
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-center mb-4 text-primary-600">
          {solution.icon}
        </div>
        <h3 className="text-xl font-heading font-semibold text-center mb-3 text-gray-900">{solution.title}</h3>
        <p className="text-gray-600 text-center mb-6">{solution.description}</p>
        <button
          onClick={toggleForm}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          {solution.action}
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900">{solution.title}</h3>
                <button 
                  onClick={toggleForm}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Fermer"
                >
                  ✕
                </button>
              </div>
              <SolutionForm fields={solution.formFields} solutionTitle={solution.title} onClose={toggleForm} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionCard;