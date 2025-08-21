import React, { Suspense } from 'react';
import ThreeDBackground from '@/components/portfolio/ThreeDBackground';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-dark text-foreground overflow-x-hidden">
      {/* 3D Background */}
      <Suspense fallback={<div />}>
        <ThreeDBackground />
      </Suspense>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;