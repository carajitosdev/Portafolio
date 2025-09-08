'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const skills = [
	{
		name: 'React',
		level: 'Avanzado',
		icon: '/logos/react.svg',
		color: '#61DAFB',
		bgHover: 'hover:bg-[#61DAFB]/10',
	},
	{
		name: 'Next.js',
		level: 'Intermedio',
		icon: '/logos/nextjs.svg',
		color: '#000000',
		bgHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
	},
	{
		name: 'TypeScript',
		level: 'Avanzado',
		icon: '/logos/typescript.svg',
		color: '#3178C6',
		bgHover: 'hover:bg-[#3178C6]/10',
	},
	
	{
		name: 'TailwindCSS',
		level: 'Avanzado',
		icon: '/logos/tailwind.svg',
		color: '#38B2AC',
		bgHover: 'hover:bg-[#38B2AC]/10',
	},
	{
		name: 'Git',
		level: 'Avanzado',
		icon: '/logos/git.svg',
		color: '#F05032',
		bgHover: 'hover:bg-[#F05032]/10',
	},
    {
        name: 'Vue.js',
        level: 'Intermedio',
        icon: '/logos/vue.svg',
        color: '#42b883',
        bgHover: 'hover:bg-[#42b883]/10',
    }
];

export default function SkillsCarousel() {
	return (
		<div className='relative'>
			<motion.div 
				className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl'
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 90, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
				}}
			/>
			
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[Autoplay, Pagination]}
				className='h-[400px]'
			>
				{skills.map((skill) => (
					<SwiperSlide key={skill.name}>
						<motion.div
							whileHover={{ scale: 1.05, rotateY: 10 }}
							className='glass-card p-8 rounded-xl h-full'
						>
							<motion.div
								initial={{ rotate: 0 }}
								animate={{ rotate: 360 }}
								transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
							>
								<img
									src={skill.icon}
									alt={skill.name}
									className='w-24 h-24 mx-auto filter drop-shadow-lg'
								/>
							</motion.div>
							<motion.h3
								whileHover={{ scale: 1.1 }}
								className='text-2xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'
							>
								{skill.name}
							</motion.h3>
							<p className='text-gray-400 mt-2'>{skill.level}</p>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
