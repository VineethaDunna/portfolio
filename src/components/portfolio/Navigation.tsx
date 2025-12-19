import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuItems = [
		{ label: "Home", href: "#", id: "hero" },
		{ label: "About", href: "#about", id: "about" },
		{ label: "Projects", href: "#projects", id: "projects" },
		{ label: "Skills", href: "#skills", id: "skills" },
		{ label: "Experience", href: "#experience", id: "experience" },
		{ label: "Certifications", href: "#certifications", id: "certifications" },
		{ label: "Contact", href: "#contact", id: "contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		if (id === "hero") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "glass backdrop-blur-xl border-b border-white/10"
						: "bg-transparent"
				}`}>
				<div className='container mx-auto px-4'>
					<div className='flex items-center justify-between h-16 lg:h-20'>
						{/* Logo */}
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='cursor-pointer'
							onClick={() => scrollToSection("hero")}>
							<h1 className='text-xl lg:text-2xl font-bold text-gradient-primary'>
								DV
							</h1>
						</motion.div>

						{/* Desktop Menu */}
						<div className='hidden md:flex items-center space-x-8'>
							{menuItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className='text-foreground/80 hover:text-foreground transition-colors duration-300 relative group'>
									{item.label}
									<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300' />
								</button>
							))}
						</div>

						{/* Desktop CTA */}
						<div className='hidden md:block'>
							<a
								href='/resume.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='group inline-flex items-center'>
								<Button variant='neon' size='sm'>
									<Download className='mr-2 h-4 w-4' />
									Resume
								</Button>
							</a>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className='md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300'>
							{isMobileMenuOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className='fixed inset-0 z-40 md:hidden'>
						<div className='absolute inset-0 bg-background/95 backdrop-blur-xl' />
						<div className='relative flex flex-col h-full pt-20'>
							<div className='flex-1 px-6 py-8'>
								<div className='space-y-6'>
									{menuItems.map((item, index) => (
										<motion.button
											key={item.id}
											initial={{ opacity: 0, x: 50 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
											onClick={() => scrollToSection(item.id)}
											className='block w-full text-left text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 py-3'>
											{item.label}
										</motion.button>
									))}
								</div>
							</div>

							<div className='px-6 py-8 border-t border-white/10'>
								<a
									href='/resume.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='group inline-flex items-center'>
									<Button variant='hero' size='lg' className='w-full'>
										<Download className='mr-2 h-5 w-5' />
										Download Resume
									</Button>
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;
