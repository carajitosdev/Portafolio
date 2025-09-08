'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

export const MotionDiv = motion.div;

export const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-900" />
});

export const ParticleText = dynamic(() => import('./ParticleText'), {
  ssr: false,
  loading: () => <p className="animate-pulse">Loading...</p>
});

export const ProjectsGrid = dynamic(() => import('./ProjectsGrid'), {
  loading: () => <div className="animate-pulse">Loading projects...</div>
});
