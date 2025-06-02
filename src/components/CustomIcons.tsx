import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

export const TelemedIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <motion.svg
    viewBox="0 0 24 24"
    className={`${className} text-primary-600 dark:text-primary-400`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <path
      fill="currentColor"
      d="M19 8h-1V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3zM5 15a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3H9a3 3 0 0 0-3 3v4H5zm14 6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9z"
    />
    <path
      fill="currentColor"
      d="M15 13h-2v-2a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"
    />
  </motion.svg>
);

export const HealthTechIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <motion.svg
    viewBox="0 0 24 24"
    className={`${className} text-primary-600 dark:text-primary-400`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <path
      fill="currentColor"
      d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"
    />
    <path
      fill="currentColor"
      d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"
    />
  </motion.svg>
);

export const AfricaIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <motion.svg
    viewBox="0 0 24 24"
    className={`${className} text-primary-600 dark:text-primary-400`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
    />
  </motion.svg>
);