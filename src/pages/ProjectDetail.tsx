import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Globe2, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import PortfolioCard from '../components/PortfolioCard';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);
  const otherProjects = projects.filter(p => p.slug !== slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full rounded-lg shadow-2xl"
            />
            
            <div className="flex gap-4 mt-6">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-700 hover:border-purple-500 px-4 py-2 rounded-lg transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              )}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-400 mb-8">{project.fullDescription}</p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-[#2a2a2a] px-3 py-1 rounded-full text-sm text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <PortfolioCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#141414] py-24 mt-24">
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