import React from "react";
import { motion } from "framer-motion";
import {
	Code,
	Palette,
	Database,
	Globe,
	Smartphone,
	Zap,
	Github,
	Figma,
} from "lucide-react";

interface Skill {
	name: string;
	icon: React.ElementType;
	level: number;
	category: string;
}

const SkillsSection: React.FC = () => {
	const skills: Skill[] = [
		{
			name: "React Native",
			icon: Code,
			level: 80,
			category: "App Development",
		},
		{ name: "React.js", icon: Code, level: 90, category: "Frontend" },
		{ name: "JavaScript", icon: Code, level: 88, category: "Frontend" },
		{
			name: "HTML/CSS/Tailwind",
			icon: Palette,
			level: 95,
			category: "Frontend",
		},
		{ name: "Node.js", icon: Database, level: 85, category: "Backend" },
		{ name: "Express.js", icon: Globe, level: 82, category: "Backend" },

		{ name: "MongoDB", icon: Database, level: 80, category: "Database" },
		{ name: "SQL", icon: Database, level: 90, category: "Database" },
		{ name: "Python", icon: Code, level: 85, category: "Language" },
		{ name: "C++", icon: Code, level: 90, category: "Language" },

		{ name: "Git", icon: Palette, level: 95, category: "other" },
		{ name: "AI tools", icon: Palette, level: 95, category: "other" },
	];

	const categories = Array.from(new Set(skills.map((skill) => skill.category)));

	return (
		<section id='skills' className='py-20 lg:py-32'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
						Technical <span className='text-gradient-primary'>Skills</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Technologies and tools I use to bring ideas to life
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className='grid md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16'>
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className='glass rounded-xl p-6 hover-lift group relative overflow-hidden'>
							{/* Background Glow */}
							<div className='absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500' />

							<div className='relative z-10 text-center space-y-4'>
								<div className='mx-auto w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
									<skill.icon className='h-8 w-8 text-primary' />
								</div>

								<div>
									<h3 className='font-semibold mb-1'>{skill.name}</h3>
									<p className='text-xs text-primary font-medium'>
										{skill.category}
									</p>
								</div>

								{/* Skill Level Bar */}
								<div className='space-y-2'>
									<div className='w-full bg-muted rounded-full h-2'>
										<motion.div
											initial={{ width: 0 }}
											whileInView={{ width: `${skill.level}%` }}
											transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
											viewport={{ once: true }}
											className='h-2 bg-gradient-primary rounded-full'
										/>
									</div>
									<p className='text-xs text-muted-foreground'>
										{skill.level}%
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Technology Icons */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className='text-center'>
					<h3 className='text-xl font-semibold mb-8'>
						Technologies I Work With
					</h3>
					<div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
						{/* Tech Logo Placeholders */}
						{[
							{ name: "RNative", color: "#d4d24dff" },
							{ name: "React", color: "#61DAFB" },
							{ name: "JavaScript", color: "#F7DF1E" },
							{ name: "Node.js", color: "#339933" },
							{ name: "MongoDB", color: "#47A248" },
							{ name: "Python", color: "#3776AB" },
							{ name: "Tailwind", color: "#06B6D4" },
						].map((tech, index) => (
							<motion.div
								key={tech.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 0.6, scale: 1 }}
								whileHover={{ opacity: 1, scale: 1.1 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='group'>
								<div
									className='w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:shadow-lg'
									style={{
										backgroundColor: `${tech.color}20`,
										border: `1px solid ${tech.color}40`,
										color: tech.color,
									}}>
									{tech.name.slice(0, 2).toUpperCase()}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default SkillsSection;
