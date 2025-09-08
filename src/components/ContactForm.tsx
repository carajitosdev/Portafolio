'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (!res.ok) throw new Error('Error en el envío');

      setStatus('success');
      setMessage('¡Mensaje enviado correctamente!');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
      setMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto px-8 py-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">Tienes alguna idea? Cuéntame.</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-1" htmlFor="name">Nombre</label>
              <input 
                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" 
                placeholder="Tu nombre" 
                type="text"
                name="name"
                id="name"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-1" htmlFor="email">Email</label>
              <input 
                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" 
                placeholder="Tu email" 
                name="email" 
                id="email" 
                type="email"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-1" htmlFor="message">Mensaje</label>
              <textarea 
                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" 
                rows={4} 
                placeholder="Tu mensaje" 
                name="message" 
                id="message"
                required 
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" 
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 text-center ${
                  status === 'success' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {message}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
