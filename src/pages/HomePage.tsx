import React from 'react';
import { Code2, Database, Globe2, Laptop, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import PortfolioCard from '../components/PortfolioCard';
import { projects } from '../data/projects';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <Navbar />
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Python Excellence</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We craft sophisticated software solutions that drive business growth and innovation, specializing in Python development and cloud architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-lg text-center font-semibold transition-colors">
                Start Your Project
              </a>
              <a href="#services" className="border border-gray-700 hover:border-purple-500 px-8 py-4 rounded-lg text-center font-semibold transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/3 h-96 bg-gradient-to-l from-purple-500/20 to-transparent blur-3xl -z-10" />
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#1c1c1c]/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Code2 className="h-8 w-8" />, title: "Custom Software Development", description: "Tailored solutions built with Python and modern frameworks" },
              { icon: <Database className="h-8 w-8" />, title: "Database Architecture", description: "Scalable and efficient data management systems" },
              { icon: <ShieldCheck className="h-8 w-8" />, title: "Security Solutions", description: "Robust security implementations and best practices" },
              { icon: <Laptop className="h-8 w-8" />, title: "Web Applications", description: "Responsive and dynamic web applications" },
              { icon: <Sparkles className="h-8 w-8" />, title: "AI Integration", description: "Smart solutions powered by machine learning" },
              { icon: <MessageSquare className="h-8 w-8" />, title: "Technical Consulting", description: "Expert guidance and solution architecture" },
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-lg bg-[#2a2a2a] hover:bg-[#2a2a2a]/80 transition-colors">
                <div className="text-purple-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#1c1c1c]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About CommercePy</h2>
            <p className="text-gray-400 mb-8">
              We're a team of passionate developers and engineers dedicated to creating exceptional software solutions. With expertise in Python and modern technologies, we help businesses thrive in the digital age.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <h3 className="text-4xl font-bold text-purple-500 mb-2">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-500 mb-2">15+</h3>
                <p className="text-gray-400">Team Members</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-500 mb-2">99%</h3>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact */}
      <footer id="contact" className="bg-[#141414] py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Ready to start your next project? Contact us for a free consultation.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <MessageSquare className="text-purple-500" />
                  <span>hello@commercepy.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Globe2 className="text-purple-500" />
                  <span>www.commercepy.com</span>
                </p>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-purple-500 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} CommercePy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}