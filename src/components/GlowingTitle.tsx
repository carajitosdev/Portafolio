'use client';
import { motion } from 'framer-motion';

export default function GlowingTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute -inset-1 bg-blue-500/20 blur-lg" />
      <span className="relative">{children}</span>
    </motion.h2>
  );
}
