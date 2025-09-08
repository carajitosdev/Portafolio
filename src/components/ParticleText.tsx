'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ParticleTextProps {
  text: string;
}

export default function ParticleText({ text }: ParticleTextProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.02,
            y: (mousePosition.y - window.innerHeight / 2) * 0.02,
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
