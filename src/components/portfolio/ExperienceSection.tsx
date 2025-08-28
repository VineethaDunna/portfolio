import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";

interface Experience {
	id: number;
	company: string;
	position: string;
	location: string;
	duration: string;
	type: string;
	responsibilities: string[];
}

const ExperienceSection: React.FC = () => {
	const experiences: Experience[] = [
		{
			id: 1,
			company: "Finelabs",
			position: "Full Stack Developer Intern",
			location: "Remote",
			duration: "Mar 2025 – Aug 2025",
			type: "Internship",
			responsibilities: [
				"Worked as a full stack developer across both web and app platforms",
				"Developed and maintained the official Finelabs website (https://finelabs.in), including building an AI-powered chatbot for customer interaction",
				"Built and deployed Bytes-News, a content-driven project with optimized UI, scalable backend, and smooth user experience",
				"Applied strong research skills to integrate emerging technologies and improve product features",
				"Leveraged advanced AI tools to design intelligent, automated solutions that enhanced overall functionality",
			],
		},
	];

	return (
		<section id='experience' className='py-20 lg:py-32 bg-background-secondary'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
						Professional{" "}
						<span className='text-gradient-primary'>Experience</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Building expertise through hands-on industry experience
					</p>
				</motion.div>

				<div className='max-w-4xl mx-auto'>
					{experiences.map((experience, index) => (
						<motion.div
							key={experience.id}
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							viewport={{ once: true }}
							className='relative'>
							{/* Timeline Line */}
							<div className='absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-primary opacity-30' />

							{/* Experience Card */}
							<div className='glass rounded-2xl p-8 ml-20 hover-lift border-l-4 border-l-primary/50'>
								<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6'>
									<div className='flex-1'>
										<div className='flex items-center gap-3 mb-2'>
											<div className='w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center'>
												<Briefcase className='h-6 w-6 text-primary' />
											</div>
											<div>
												<h3 className='text-xl font-semibold'>
													{experience.position}
												</h3>
												<p className='text-primary font-medium'>
													{experience.company}
												</p>
											</div>
										</div>

										<div className='flex flex-wrap gap-4 text-sm text-muted-foreground mb-4'>
											<div className='flex items-center gap-1'>
												<Calendar className='h-4 w-4' />
												{experience.duration}
											</div>
											<div className='flex items-center gap-1'>
												<MapPin className='h-4 w-4' />
												{experience.location}
											</div>
											<span className='px-2 py-1 bg-primary/10 text-primary rounded-full text-xs'>
												{experience.type}
											</span>
										</div>
									</div>
								</div>

								{/* Responsibilities */}
								<div className='space-y-3'>
									<h4 className='font-semibold text-foreground/90 mb-3'>
										Key Responsibilities:
									</h4>
									<div className='grid gap-3'>
										{experience.responsibilities.map((responsibility, idx) => (
											<motion.div
												key={idx}
												initial={{ opacity: 0, x: 20 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.5, delay: idx * 0.1 }}
												viewport={{ once: true }}
												className='flex items-start gap-3'>
												<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
												<p className='text-muted-foreground leading-relaxed'>
													{responsibility}
												</p>
											</motion.div>
										))}
									</div>
								</div>
							</div>

							{/* Timeline Dot */}
							<div className='absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-2 border-background' />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
