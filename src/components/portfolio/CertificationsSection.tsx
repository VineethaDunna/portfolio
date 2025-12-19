import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, ExternalLink } from "lucide-react";

interface Certification {
	id: number;
	title: string;
	issuer: string;
	type: "certification" | "project" | "workshop" | "achievement";
	icon: React.ElementType;
	description?: string;
	url: string;
}

const CertificationsSection: React.FC = () => {
	const items: Certification[] = [
		{
			id: 1,
			title: "Full Stack Developer",
			issuer: "Finelabs - CEO",
			type: "certification",
			icon: Award,
			description:
				"Awarded for delivering impactful full stack development work and contributing significant value to Finelabs projects",
			url: "https://res.cloudinary.com/dxd1hla2c/image/upload/v1756471610/portfolio-certifications/finelabs-intern.png",
		},
		{
			id: 2,
			title: "Full-Stack Development",
			issuer: "NxtWave (Ongoing)",
			type: "certification",
			icon: GraduationCap,
			description: "Comprehensive full-stack development program",
			url: "#",
		},
		{
			id: 3,
			title: "Deep Learning",
			issuer: "NPTEL - IIT Ropar",
			type: "certification",
			icon: GraduationCap,
			description: "Advanced machine learning and neural networks",
			url: "https://res.cloudinary.com/dxd1hla2c/image/upload/v1756473761/portfolio-certifications/Deep-learning-Vineetha.png",
		},
		{
			id: 4,
			title: "Object-Oriented System Development",
			issuer: "NPTEL - IIT Kharagpur",
			type: "certification",
			icon: GraduationCap,
			description: "Software engineering and OOP principles",
			url: "https://res.cloudinary.com/dxd1hla2c/image/upload/v1756474798/portfolio-certifications/ooad.png",
		},
		{
			id: 6,
			title: "Large Language Models",
			issuer: "NPTEL – IIT (Elite + Silver)",
			type: "certification",
			icon: GraduationCap,
			description:
				"Completed an in-depth NPTEL course on Large Language Models covering transformers, prompt engineering fundamentals, and modern NLP architectures.",
			url: "https://res.cloudinary.com/dxd1hla2c/image/upload/v1766124572/portfolio-certifications/large-language-models.png",
		},
		{
			id: 7,
			title: "Privacy and Security in Social Media",
			issuer: "NPTEL – IIT (Elite + Silver | Top 5%)",
			type: "certification",
			icon: GraduationCap,
			description:
				"Recognized in the Top 5% for excellence in understanding privacy risks, security challenges, and ethical considerations in social media platforms.",
			url: "https://res.cloudinary.com/dxd1hla2c/image/upload/v1766124574/portfolio-certifications/privacy-security.png",
		},

		{
			id: 5,
			title: "GenAI Buildathon - Generative AI Mastery Workshop",
			issuer: "Open AI | NxtWave",
			type: "workshop",
			icon: Trophy,
			description:
				"Participated in India's Biggest GenAI Buildathon as part of the OpenAI Academy Learning Community",
			url: "https://cdn1.ccbp.in/misc/workshop-openai-nxtwave-buildathon-genai-online-workshop-participation/D9Y6VZTMFK.png",
		},
		{
			id: 8,
			title: "MCP Project - AI Workflow Development",
			issuer: "NxtWave CCBP 4.0 Academy",
			type: "project",
			icon: Award,
			description:
				"Explored Model Context Protocol, integrated AI with Cursor IDE, Pipedream, and MCP Servers, and gained hands-on experience in building prompt-driven AI workflows",
			url: "https://cdn1.ccbp.in/misc/workshop-acad-mcp-mega-workshop-completion/3P6LTLFV9D.png",
		},
		{
			id: 9,
			title: "Solver Salaar 2024",
			issuer: "NxtWave",
			type: "achievement",
			icon: Trophy,
			description:
				"Honored as Solver Salaar for outstanding problem-solving performance at NxtWave Academy, contributing to 197M+ minutes of learning, 36M+ lines of code, and 143M+ problems solved",
			url: "https://www.linkedin.com/posts/vineethadunna_nxtwave-solversaaalaar-learningjourney-activity-7280090811789156352-o96O?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYypjoBL0Kjkj-H9AOjE8UVW8BnOdtRADo",
		},
	];

	const certifications = items.filter((item) => item.type === "certification");
	const achievements = items.filter(
		(item) =>
			item.type === "achievement" ||
			item.type === "workshop" ||
			item.type === "project"
	);

	return (
		<section id='certifications' className='py-20 lg:py-32'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
						Certifications &{" "}
						<span className='text-gradient-primary'>Achievements</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Continuous learning and recognition of excellence
					</p>
				</motion.div>

				{/* Certifications */}
				<div className='mb-16'>
					<motion.h3
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-2xl font-semibold mb-8 flex items-center gap-3'>
						<GraduationCap className='h-6 w-6 text-primary' />
						Certifications
					</motion.h3>

					<div className='grid md:grid-cols-2 gap-6'>
						{certifications.map((cert, index) => (
							<motion.div
								key={cert.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='glass rounded-xl p-6 hover-lift group relative'>
								{/* External link top-right */}
								<a
									href={cert.url}
									target='_blank'
									rel='noopener noreferrer'
									className='absolute top-4 right-4 text-muted-foreground hover:text-primary transition'>
									<ExternalLink className='h-5 w-5' />
								</a>

								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
										<cert.icon className='h-6 w-6 text-primary' />
									</div>
									<div className='flex-1'>
										<h4 className='font-semibold mb-1 group-hover:text-primary transition-colors duration-300'>
											{cert.title}
										</h4>
										<p className='text-primary font-medium text-sm mb-2'>
											{cert.issuer}
										</p>
										{cert.description && (
											<p className='text-muted-foreground text-sm'>
												{cert.description}
											</p>
										)}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Achievements */}
				<div>
					<motion.h3
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-2xl font-semibold mb-8 flex items-center gap-3'>
						<Trophy className='h-6 w-6 text-primary' />
						Achievements / Workshops / Projects
					</motion.h3>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{achievements.map((achievement, index) => (
							<motion.div
								key={achievement.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='glass rounded-xl p-6 hover-lift group relative text-center'>
								{/* External link top-right */}
								<a
									href={achievement.url}
									target='_blank'
									rel='noopener noreferrer'
									className='absolute top-4 right-4 text-muted-foreground hover:text-primary transition'>
									<ExternalLink className='h-5 w-5' />
								</a>

								<div className='w-16 h-16 rounded-full bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<achievement.icon className='h-8 w-8 text-primary' />
								</div>
								<h4 className='font-semibold mb-2 group-hover:text-primary transition-colors duration-300'>
									{achievement.title}
								</h4>
								<p className='text-primary font-medium text-sm mb-2'>
									{achievement.issuer}
								</p>
								{achievement.description && (
									<p className='text-muted-foreground text-sm'>
										{achievement.description}
									</p>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CertificationsSection;
