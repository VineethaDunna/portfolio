import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Code, Palette, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection: React.FC = () => {
	const skills = [
		{
			icon: Code,
			title: "Frontend",
			description: "React.js, HTML, CSS, JavaScript, Tailwind",
		},
		{
			icon: Palette,
			title: "Backend",
			description: "Node.js, Express, MongoDB, SQLite",
		},
		{
			icon: Zap,
			title: "Other Skills",
			description: "React Native, AI Tools, Python, C++, DSA, Git, GitHub",
		},
	];

	return (
		<section id='about' className='py-20 lg:py-32'>
			<div className='container mx-auto px-4'>
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
						Passionate about creating digital experiences that make a difference
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
							<div className='absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500'></div>
							<div className='relative bg-card-secondary rounded-2xl p-8 border-gradient'>
								<img
									src={profilePhoto}
									alt='Dunna Vineetha'
									className='w-full max-w-md mx-auto  rounded-xl shadow-card hover:scale-15 transition-transform duration-500'
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
								Passionate About Innovation
							</h3>
							<p className='text-lg text-muted-foreground leading-relaxed'>
								B.Tech Computer Science student at RGUKT Srikakulam with a
								stellar 9.2 CGPA, currently working as a Full Stack Developer
								Intern at Finelabs. I specialize in building both web and mobile
								applications using modern frameworks like React, Node.js, and
								cutting-edge AI integrations.
							</p>
							<p className='text-lg text-muted-foreground leading-relaxed'>
								From creating scalable news platforms and AI-powered chatbots to
								designing responsive websites, I enjoy solving real-world
								problems through end-to-end development. Beyond coding, I
								actively explore new technologies, participate in hackathons,
								and push boundaries in AI-driven innovation.
							</p>
						</div>

						{/* Skills Grid */}
						<div className='grid md:grid-cols-3 gap-6'>
							{skills.map((skill, index) => (
								<motion.div
									key={skill.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
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

						{/* Download Resume Button */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}>
							<a
								href='/resume.pdf'
								download
								target='_blank'
								rel='noopener noreferrer'
								className='group inline-flex items-center'>
								<Button variant='hero' size='lg'>
									<Download className='mr-2 h-5 w-5 group-hover:animate-bounce' />
									Download Resume
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
