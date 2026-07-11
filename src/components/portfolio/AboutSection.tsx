import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Code, Database, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection: React.FC = () => {
	const skills = [
		{
			icon: Code,
			title: "Frontend",
			description: "React.js, Next.js, JavaScript, HTML, CSS, Tailwind CSS",
		},
		{
			icon: Database,
			title: "Backend & Database",
			description:
				"Node.js, Express.js, PostgreSQL, MongoDB, Supabase, Firebase",
		},
		{
			icon: Zap,
			title: "Tools & Engineering",
			description: "Git, GitHub, GitHub Actions, AI Tools, Python, C++, DSA",
		},
	];

	return (
		<section id='about' className='py-20 lg:py-32'>
			<div className='container mx-auto px-4'>
				{/* Section Heading */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
						About <span className='text-gradient-primary'>Me</span>
					</h2>

					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Passionate about building products, solving real-world problems, and
						turning ideas into meaningful digital experiences
					</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
					{/* Profile Image */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='relative'>
						<div className='relative group'>
							<div className='absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500' />

							<div className='relative bg-card-secondary rounded-2xl p-8 border-gradient'>
								<img
									src={profilePhoto}
									alt='Vineetha Dunna'
									className='w-full max-w-md mx-auto rounded-xl shadow-card hover:scale-105 transition-transform duration-500'
								/>
							</div>
						</div>
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='space-y-8'>
						<div className='space-y-6'>
							<h3 className='text-2xl md:text-3xl font-semibold'>
								Building Products That Solve Real Problems
							</h3>

							<p className='text-lg text-muted-foreground leading-relaxed'>
								I'm a Computer Science graduate from RGUKT Srikakulam with a 9.3
								CGPA, currently working as a Software Engineer at Gridlex. My
								work focuses on product development, building new features,
								implementing application flows, and improving production
								applications using React.js, JavaScript, PostgreSQL, and modern
								development workflows.
							</p>

							<p className='text-lg text-muted-foreground leading-relaxed'>
								My experience spans full-stack web development, mobile
								applications, APIs, databases, GitHub Actions, and AI-assisted
								development. I enjoy understanding how products work end to end,
								solving complex problems, and transforming ideas into scalable,
								user-focused software.
							</p>
						</div>

						{/* Skills Grid */}
						<div className='grid md:grid-cols-3 gap-6'>
							{skills.map((skill, index) => (
								<motion.div
									key={skill.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: index * 0.1,
									}}
									viewport={{ once: true }}
									className='glass rounded-xl p-6 hover-lift group'>
									<skill.icon className='h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300' />

									<h4 className='font-semibold mb-2'>{skill.title}</h4>

									<p className='text-sm text-muted-foreground'>
										{skill.description}
									</p>
								</motion.div>
							))}
						</div>

						{/* Resume Button */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.4,
							}}
							viewport={{ once: true }}>
							<a
								href={`${import.meta.env.BASE_URL}resume.pdf`}
								target='_blank'
								rel='noopener noreferrer'
								className='group inline-flex items-center'>
								<Button variant='hero' size='lg'>
									<Download className='mr-2 h-5 w-5 group-hover:animate-bounce' />
									View Resume
								</Button>
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
