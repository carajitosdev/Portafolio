'use client';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/10 backdrop-blur-md dark:bg-gray-800/50 shadow-lg transition-colors duration-200"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="focus:outline-none bg-blue-700 hover:bg-blue-800 transition-colors px-4 py-2 rounded-4xl">
          <div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform w-2.50 h-8.5 bg-fuchsia-500 rounded-lg">
            Mi Portafolio
          </div>
        </button>
        <div className="flex items-center space-x-6">
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            Sobre mí
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Proyectos
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contacto
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
