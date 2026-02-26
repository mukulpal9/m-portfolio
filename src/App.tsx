/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-cream selection:bg-brand-lime selection:text-brand-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 mix-blend-difference">
        <div className="text-2xl font-bold tracking-tighter uppercase">
          MUKUL<span className="text-brand-lime">.</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#contact" className="hidden md:flex items-center gap-2 bg-brand-lime text-brand-dark px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors">
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button className="w-10 h-10 border border-brand-cream/20 rounded-full flex items-center justify-center hover:border-brand-lime transition-colors">
            <div className="space-y-1.5">
              <div className="w-4 h-0.5 bg-brand-cream"></div>
              <div className="w-4 h-0.5 bg-brand-cream"></div>
            </div>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
        
        {/* Center Image */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-center pointer-events-none">
          <motion.img 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/Profile.png" 
            alt="Mukul" 
            className="h-[75vh] md:h-[95vh] object-contain object-bottom"
          />
        </div>

        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 whitespace-nowrap">
          <div className="relative inline-block">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-[35vw] md:text-[28vw] leading-none tracking-tighter uppercase bg-gradient-to-b from-white to-brand-grey bg-clip-text text-transparent"
            >
              Mukul
            </motion.h1>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif italic text-[10vw] md:text-[6vw] leading-[0.8] text-brand-lime absolute bottom-6 left-4 md:bottom-12 md:left-8 z-20"
            >
              Portfolio
            </motion.h2>
          </div>
        </div>

        {/* Foreground Elements */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto h-full flex flex-col justify-end pb-12 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-end w-full gap-8">
            
            {/* Left Elements (Socials + Focus Box) */}
            <div className="flex items-end gap-12 w-full md:w-auto">
              {/* Social Icons */}
              <div className="flex flex-col gap-6 pb-2">
                <a href="#" className="hover:text-brand-lime transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/mukul-pal-6794593a5/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/_mukulllll" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              {/* Info Box */}
              <div className="hidden md:block border border-brand-cream/20 rounded-2xl p-6 backdrop-blur-xl bg-brand-dark/80 max-w-xs shadow-2xl">
                <div className="text-brand-lime font-mono text-xs uppercase tracking-widest mb-4">Current Focus</div>
                <div className="flex justify-between items-end border-b border-brand-cream/20 pb-4 mb-4">
                  <div>
                    <div className="font-bold text-lg">Full-Stack</div>
                    <div className="text-brand-grey text-xs">Development</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">2024</div>
                    <div className="text-brand-grey text-xs">Present</div>
                  </div>
                </div>
                <p className="text-xs text-brand-cream/80 leading-relaxed">
                  Aspiring Software Developer with a focus on Python and front-end technologies, driven by clean code and user-centric design.
                </p>
              </div>
            </div>

            {/* Right Role Text */}
            <div className="text-right w-full md:w-auto flex flex-col items-end">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tight">
                Software <span className="text-brand-lime">Developer</span>
              </h2>
              <div className="flex items-center gap-4 mt-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-lime w-8 h-8 md:w-12 md:h-12">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
                </svg>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tight">
                  <span className="text-brand-grey">Web</span> <span className="text-brand-lime/60">Designer</span>
                </h2>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-6 border-y border-brand-cream/10 bg-brand-lime text-brand-dark overflow-hidden">
        <div className="marquee-track font-black uppercase text-4xl tracking-tighter flex items-center gap-8">
          <span>Message from Mukul</span>
          <span className="text-xl">✦</span>
          <span>Building the future of web</span>
          <span className="text-xl">✦</span>
          <span>Clean Code</span>
          <span className="text-xl">✦</span>
          <span>Intuitive Design</span>
          <span className="text-xl">✦</span>
          <span>Message from Mukul</span>
          <span className="text-xl">✦</span>
          <span>Building the future of web</span>
          <span className="text-xl">✦</span>
          <span>Clean Code</span>
          <span className="text-xl">✦</span>
          <span>Intuitive Design</span>
          <span className="text-xl">✦</span>
        </div>
      </section>

      {/* Impact Text Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl"
        >
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
            <span className="font-serif italic text-brand-lime text-5xl md:text-7xl lg:text-8xl pr-4">Crafting</span>
            clean code, building
            <span className="font-serif italic text-brand-lime text-5xl md:text-7xl lg:text-8xl px-4">intuitive</span>
            experiences, bringing it all in all ways. Defining a
            <span className="font-serif italic text-brand-lime text-5xl md:text-7xl lg:text-8xl pl-4">standard</span>
            in web development.
          </h3>
        </motion.div>
      </section>

      {/* Split Section (Skills) */}
      <section className="bg-brand-green py-32 clip-diagonal-reverse relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            
            {/* Front End Col */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-brand-lime leading-none">Front</h2>
                <h2 className="font-black text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-none">End</h2>
              </div>
              <ul className="space-y-4 border-t border-brand-cream/10 pt-8">
                {['HTML5 & CSS3', 'JavaScript (ES6+)', 'React & Tailwind CSS', 'Framer Motion'].map((skill) => (
                  <li key={skill} className="flex items-center gap-4 text-lg font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-lime"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Back End Col */}
            <div className="space-y-8 md:mt-16">
              <div>
                <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-brand-lime leading-none">Back</h2>
                <h2 className="font-black text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-none">End</h2>
              </div>
              <ul className="space-y-4 border-t border-brand-cream/10 pt-8">
                {['Python', 'Node.js', 'SQL & Databases', 'RESTful APIs'].map((skill) => (
                  <li key={skill} className="flex items-center gap-4 text-lg font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-lime"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Col */}
            <div className="space-y-8 md:mt-32">
              <div>
                <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-brand-lime leading-none">Visual</h2>
                <h2 className="font-black text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-none">Design</h2>
              </div>
              <ul className="space-y-4 border-t border-brand-cream/10 pt-8">
                {['Photoshop', 'Canva', 'Affinity', 'Lightroom'].map((skill) => (
                  <li key={skill} className="flex items-center gap-4 text-lg font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-lime"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="font-mono text-brand-lime text-sm uppercase tracking-widest mb-4">Selected Work</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Featured <span className="font-serif italic text-brand-lime font-normal normal-case">Projects</span>
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-brand-lime hover:text-white transition-colors font-mono uppercase text-sm tracking-widest">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        {/* Blank Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="aspect-video bg-brand-green/30 rounded-2xl mb-6 overflow-hidden relative border border-brand-cream/5 group-hover:border-brand-lime/50 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-brand-grey font-mono text-sm uppercase tracking-widest">
                  Project Image Coming Soon
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-lime transition-colors">Project Title {item}</h3>
                  <p className="text-brand-grey">Web Development / Design</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center group-hover:bg-brand-lime group-hover:text-brand-dark group-hover:border-brand-lime transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Callout Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="font-mono text-brand-lime text-sm uppercase tracking-widest">The Journey</div>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              It doesn't matter <span className="font-serif italic text-brand-lime">where</span> you start, it's <span className="font-serif italic text-brand-lime">how</span> you progress from there.
            </h2>
            <p className="text-brand-grey leading-relaxed">
              Currently pursuing a Bachelor of Commerce while independently mastering software development. The combination of structured business thinking and creative problem-solving gives me a unique perspective on building digital products.
            </p>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl overflow-hidden relative group bg-brand-green/20 flex items-center justify-center">
              <img 
                src="/about.png" 
                alt="About Mukul" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-lime mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 bg-brand-dark border border-brand-cream/20 p-6 rounded-2xl shadow-2xl">
              <div className="text-brand-lime font-bold text-3xl mb-1">2023</div>
              <div className="text-sm text-brand-grey uppercase tracking-wider font-mono">Started Coding</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-lime text-brand-dark p-6 rounded-2xl shadow-2xl">
              <div className="font-black text-3xl mb-1 uppercase tracking-tighter">India</div>
              <div className="text-sm font-bold uppercase tracking-wider font-mono">Based In</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-green pt-32 pb-12 px-6 md:px-12 clip-diagonal relative overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
          <div className="font-black text-[25vw] leading-none tracking-tighter uppercase">MUKUL</div>
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium mb-8">
                Always <span className="font-serif italic text-brand-lime">bringing</span> the <span className="font-serif italic text-brand-lime">fight</span>.
              </h2>
              <a href="mailto:tory.mukul@gmail.com" className="inline-flex items-center gap-4 bg-brand-lime text-brand-dark px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide hover:bg-white transition-colors">
                <span>Business Enquiries</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:justify-items-end">
              <div className="space-y-6">
                <div className="font-mono text-brand-lime text-sm uppercase tracking-widest">Pages</div>
                <div className="flex flex-col gap-4 font-medium text-lg">
                  <a href="#" className="hover:text-brand-lime transition-colors">Home</a>
                  <a href="#" className="hover:text-brand-lime transition-colors">About</a>
                  <a href="#" className="hover:text-brand-lime transition-colors">Projects</a>
                  <a href="#" className="hover:text-brand-lime transition-colors">Resume</a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="font-mono text-brand-lime text-sm uppercase tracking-widest">Follow On</div>
                <div className="flex flex-col gap-4 font-medium text-lg">
                  <a href="https://instagram.com/_mukulllll" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors flex items-center gap-2">
                    <Instagram className="w-5 h-5" /> Instagram
                  </a>
                  <a href="https://linkedin.com/in/mukul-pal-6794593a5/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors flex items-center gap-2">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                  <a href="#" className="hover:text-brand-lime transition-colors flex items-center gap-2">
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-cream/10 text-brand-grey text-sm font-mono">
            <div>© 2026 Mukul Pal. All rights reserved.</div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <MapPin className="w-4 h-4 text-brand-lime" />
              Meerut, U.P, India
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
