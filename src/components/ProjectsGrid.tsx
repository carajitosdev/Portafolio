'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portafolio Personal',
    description: 'Mi portafolio personal construido con Next.js y TailwindCSS para mostrar mis proyectos y habilidades.',
    tech: ['React', 'NextJS', 'TailwindCSS'],
    image: '/projects/project1.jpg'
  },
  // ...puedes agregar más proyectos aquí
];

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="mt-4 flex gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
