// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";
// import project1 from "@/assets/project-1.png";
// import project2 from "@/assets/job-quest.png";
// import project3 from "@/assets/intellion-landing-page.png";

// interface Project {
// 	id: number;
// 	title: string;
// 	description: string;
// 	image: string;
// 	technologies: string[];
// 	liveUrl: string;
// 	githubUrl: string;
// 	featured: boolean;
// }

// const ProjectsSection: React.FC = () => {
// 	const projects: Project[] = [
// 		{
// 			id: 1,
// 			title: "NxtWatch",
// 			description:
// 				"YouTube clone application with video streaming, likes/dislikes, and saved videos. Built with authentication, responsive UI, and seamless navigation for an engaging video-watching experience.",
// 			image: project1,
// 			technologies: [
// 				"React",
// 				"Tailwind CSS",
// 				"Node.js",
// 				"Express",
// 				"MongoDB",
// 				"Clerk Auth",
// 			],
// 			liveUrl: "https://nxtwatchvinee.ccbp.tech/",
// 			githubUrl: "https://github.com/VineethaDunna/nxtWatchApp",
// 			featured: true,
// 		},
// 		{
// 			id: 2,
// 			title: "Job Quest",
// 			description:
// 				"Modern job search platform with JWT authentication, protected routes, and seamless API integration. Features job filtering, search functionality, and responsive design.",
// 			image: project2,
// 			technologies: [
// 				"React",
// 				"JavaScript",
// 				"CSS",
// 				"Bootstrap",
// 				"JWT",
// 				"REST API",
// 			],
// 			liveUrl: "https://jobquest.ccbp.tech/",
// 			githubUrl: "https://github.com/VineethaDunna/job-quest",
// 			featured: true,
// 		},
// 		{
// 			id: 3,
// 			title: "Responsive Landing Page",
// 			description:
// 				"Responsive landing page with modern design, fully optimized for all devices. Features intuitive navigation, interactive UI elements, and pixel-perfect layouts to deliver a sleek and engaging user experience",
// 			image: project3,
// 			technologies: [
// 				"React",
// 				"Bootstrap",
// 				"React Router",
// 				"Tailwind CSS",
// 				"Responsive Design",
// 			],
// 			liveUrl: "https://finolity-landing-page.vercel.app/",
// 			githubUrl: "https://github.com/VineethaDunna/finolityLandingPage",
// 			featured: false,
// 		},
// 	];

// 	return (
// 		<section id='projects' className='py-20 lg:py-32 bg-background-secondary'>
// 			<div className='container mx-auto px-4'>
// 				<motion.div
// 					initial={{ opacity: 0, y: 30 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8 }}
// 					viewport={{ once: true }}
// 					className='text-center mb-16'>
// 					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
// 						Featured <span className='text-gradient-primary'>Projects</span>
// 					</h2>
// 					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
// 						Showcasing some of my best work and creative solutions
// 					</p>
// 				</motion.div>

// 				<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
// 					{projects.map((project, index) => (
// 						<motion.div
// 							key={project.id}
// 							initial={{ opacity: 0, y: 50 }}
// 							whileInView={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.6, delay: index * 0.1 }}
// 							viewport={{ once: true }}
// 							className={`group relative ${
// 								project.featured ? "lg:col-span-2 xl:col-span-1" : ""
// 							}`}>
// 							<div className='glass rounded-2xl overflow-hidden hover-lift'>
// 								{/* Project Image */}
// 								<div className='relative overflow-hidden'>
// 									<img
// 										src={project.image}
// 										alt={project.title}
// 										className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
// 									/>
// 									<div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

// 									{/* Project Links Overlay */}
// 									<div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
// 										<a
// 											href={project.liveUrl}
// 											target='_blank'
// 											rel='noopener noreferrer'
// 											aria-label={`${project.title} Live Demo`}>
// 											<Button size='sm' variant='glass' className='p-2'>
// 												<ExternalLink className='h-4 w-4' />
// 											</Button>
// 										</a>
// 										<a
// 											href={project.githubUrl}
// 											target='_blank'
// 											rel='noopener noreferrer'
// 											aria-label={`${project.title} GitHub Repository`}>
// 											<Button size='sm' variant='glass' className='p-2'>
// 												<Github className='h-4 w-4' />
// 											</Button>
// 										</a>
// 									</div>
// 								</div>

// 								{/* Project Content */}
// 								<div className='p-6 space-y-4'>
// 									<div>
// 										<h3 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300'>
// 											{project.title}
// 										</h3>
// 										<p className='text-muted-foreground leading-relaxed'>
// 											{project.description}
// 										</p>
// 									</div>

// 									{/* Technologies */}
// 									<div className='flex flex-wrap gap-2'>
// 										{project.technologies.map((tech) => (
// 											<span
// 												key={tech}
// 												className='px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20'>
// 												{tech}
// 											</span>
// 										))}
// 									</div>

// 									{/* Action Buttons */}
// 									<div className='flex gap-3 pt-2'>
// 										<a
// 											href={project.liveUrl}
// 											target='_blank'
// 											rel='noopener noreferrer'
// 											className='flex-1'>
// 											<Button variant='hero' size='sm' className='w-full'>
// 												<ExternalLink className='mr-2 h-4 w-4' />
// 												Live Demo
// 											</Button>
// 										</a>
// 										<a
// 											href={project.githubUrl}
// 											target='_blank'
// 											rel='noopener noreferrer'
// 											className='flex-1'>
// 											<Button variant='neon' size='sm' className='w-full'>
// 												<Github className='mr-2 h-4 w-4' />
// 												Code
// 											</Button>
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</motion.div>
// 					))}
// 				</div>

// 				{/* View All Projects Button */}
// 				<motion.div
// 					initial={{ opacity: 0, y: 30 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8, delay: 0.4 }}
// 					viewport={{ once: true }}
// 					className='text-center mt-12'>
// 					<a
// 						href='https://github.com/VineethaDunna/ReactJS'
// 						target='_blank'
// 						rel='noopener noreferrer'
// 						className='flex-1'>
// 						<Button variant='neon' size='lg'>
// 							View All Projects
// 						</Button>
// 					</a>
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// };

// export default ProjectsSection;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Images
import qwikImg from "@/assets/qwik.png";
import magicTouchImg from "@/assets/magic-touch.jpeg";
import weddingImg from "@/assets/wedding.png";
import nxtWatchImg from "@/assets/project-1.png";
import jobQuestImg from "@/assets/job-quest.png";
import landingImg from "@/assets/intellion-landing-page.png";
import finelabsImg from "@/assets/finelabs.jpeg";
import bytesImg from "@/assets/bytes.png";

type Category = "all" | "fullstack" | "mobile" | "frontend";

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	githubUrl: string;
	category: Category;
}

const ProjectsSection: React.FC = () => {
	const [activeTab, setActiveTab] = useState<Category>("all");

	const projects: Project[] = [
		{
			id: 1,
			title: "Qwik – Find Services in Seconds",
			description:
				"Real-time, location-based full-stack platform to instantly find and book nearby service providers with Google Sign-In and role-based access.",
			image: qwikImg,
			technologies: ["React", "Next.js", "Node.js", "Supabase", "Google Auth"],
			liveUrl: "https://qwik-one.vercel.app/",
			githubUrl: "https://github.com/VineethaDunna/Qwik-Find-Help-in-Seconds",
			category: "fullstack",
		},
		{
			id: 2,
			title: "Magic Touch App",
			description:
				"React Native mobile app for beauty & boutique services with booking management, smart pricing, and real-time notifications.",
			image: magicTouchImg,
			technologies: ["React Native", "Expo", "Firebase", "Tailwind CSS"],
			liveUrl:
				"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376847599137406976",
			githubUrl: "https://github.com/VineethaDunna/magic-touch-app",
			category: "mobile",
		},
		{
			id: 3,
			title: "Revathi & Renu Wedding Invitation",
			description:
				"Elegant and interactive wedding invitation website with smooth animations and responsive design.",
			image: weddingImg,
			technologies: ["React", "CSS", "Animations", "Vercel"],
			liveUrl: "https://revathrenu-wedding-invitation.vercel.app/",
			githubUrl: "https://github.com/VineethaDunna/lakshya-revathi-celebration",
			category: "frontend",
		},
		{
			id: 4,
			title: "NxtWatch",
			description:
				"YouTube-like video streaming app with authentication, protected routes, search, and dark mode.",
			image: nxtWatchImg,
			technologies: ["React", "Node.js", "Express", "MongoDB"],
			liveUrl: "https://nxtwatchvinee.ccbp.tech/",
			githubUrl: "https://github.com/VineethaDunna/nxtWatchApp",
			category: "fullstack",
		},
		{
			id: 5,
			title: "Job Quest",
			description:
				"Modern job search platform with JWT authentication, filtering, search, and responsive UI.",
			image: jobQuestImg,
			technologies: ["React", "JWT", "REST APIs", "Bootstrap"],
			liveUrl: "https://jobquest.ccbp.tech/",
			githubUrl: "https://github.com/VineethaDunna/job-quest",
			category: "fullstack",
		},
		{
			id: 6,
			title: "Responsive Landing Page",
			description:
				"Pixel-perfect responsive landing page optimized for all screen sizes with modern UI patterns.",
			image: landingImg,
			technologies: ["React", "Tailwind CSS", "Responsive Design"],
			liveUrl: "https://finolity-landing-page.vercel.app/",
			githubUrl: "https://github.com/VineethaDunna/finolityLandingPage",
			category: "frontend",
		},
		{
			id: 7,
			title: "Fine Labs Mobile App",
			description:
				"Production-ready healthcare mobile app developed during internship at Fine Labs. Supports secure Google authentication, real-time data handling, and seamless user experience for lab discovery and bookings.",
			image: finelabsImg, // add image import
			technologies: [
				"React Native",
				"Expo",
				"Node.js",
				"Firebase",
				"Google Auth",
			],
			liveUrl:
				"https://res.cloudinary.com/dxd1hla2c/video/upload/v1766124655/portfolio-certifications/finelabs_v1xamf.mp4",
			githubUrl: "https://github.com/VineethaDunna",
			category: "mobile",
		},
		{
			id: 8,
			title: "Bytes – Daily News App",
			description:
				"Inshorts-style multilingual news app delivering short-form news, reels-style content, and video updates. Fetches real-time news using public APIs with category-wise and language-based feeds.",
			image: bytesImg, // add image import
			technologies: [
				"React Native",
				"Expo",
				"News API",
				"REST APIs",
				"Firebase",
			],
			liveUrl: "https://github.com/VineethaDunna",
			githubUrl: "https://github.com/VineethaDunna",
			category: "mobile",
		},
	];

	const filteredProjects =
		activeTab === "all"
			? projects
			: projects.filter((p) => p.category === activeTab);

	return (
		<section id='projects' className='py-20 bg-background-secondary'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-10'>
					Featured <span className='text-gradient-primary'>Projects</span>
				</h2>

				{/* Tabs */}
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{[
						{ key: "all", label: "All Projects" },
						{ key: "fullstack", label: "Full Stack Apps" },
						{ key: "mobile", label: "React Native / Android" },
						{ key: "frontend", label: "Frontend Apps" },
					].map((tab) => (
						<Button
							key={tab.key}
							variant={activeTab === tab.key ? "hero" : "outline"}
							onClick={() => setActiveTab(tab.key as Category)}>
							{tab.label}
						</Button>
					))}
				</div>

				{/* Projects Grid */}
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProjects.map((project) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
							className='glass rounded-2xl overflow-hidden hover-lift'>
							<img
								src={project.image}
								alt={project.title}
								className='h-56 w-full object-cover'
							/>

							<div className='p-5 space-y-4'>
								<h3 className='text-xl font-semibold'>{project.title}</h3>
								<p className='text-muted-foreground text-sm'>
									{project.description}
								</p>

								<div className='flex flex-wrap gap-2'>
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className='text-xs px-3 py-1 rounded-full bg-primary/10 text-primary'>
											{tech}
										</span>
									))}
								</div>

								<div className='flex gap-3 pt-3'>
									<a href={project.liveUrl} target='_blank'>
										<Button size='sm'>
											<ExternalLink className='h-4 w-4 mr-2' />
											Live
										</Button>
									</a>
									<a href={project.githubUrl} target='_blank'>
										<Button variant='neon' size='sm'>
											<Github className='h-4 w-4 mr-2' />
											Code
										</Button>
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				<div className='text-center mt-14'>
					<a
						href='https://github.com/VineethaDunna'
						target='_blank'
						rel='noopener noreferrer'>
						<Button variant='neon' size='lg'>
							View More Projects on GitHub
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
