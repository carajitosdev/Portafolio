'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import GlowingTitle from "@/components/GlowingTitle";
import Footer from "@/components/Footer";

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });
const ParticleText = dynamic(() => import('@/components/ParticleText'), { ssr: false });
const ProjectsGrid = dynamic(() => import('@/components/ProjectsGrid'), { ssr: false });

export default function Home() {
	return (
		<main className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
			<Navbar />
			
			{/* Hero Section */}
			<section className="relative h-screen flex items-center">
				<Scene3D />
				<div className="container mx-auto px-4 z-10">
					<motion.h1 
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
					>
						Desarrollador Full Stack
					</motion.h1>
					<ParticleText text="Creando experiencias digitales únicas" />
				</div>
			</section>
			{/* About Section */}
			<section id="about" className="py-20">
				<div className="container mx-auto px-4">
					<GlowingTitle>Sobre mí</GlowingTitle>
					
					<div className="text-lg text-gray-300 leading-relaxed">
						Soy un desarrollador full stack con experiencia en la creación de aplicaciones web modernas y escalables. Me especializo en tecnologías como React, Next.js, Node.js y bases de datos SQL y NoSQL. Me apasiona transformar ideas en productos digitales funcionales y atractivos.git add

					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<GlowingTitle>Proyectos</GlowingTitle>
					<ProjectsGrid />
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<GlowingTitle>Contacto</GlowingTitle>
					<ContactForm />
				</div>
			</section>

			<Footer />
		</main>
	);
}
	