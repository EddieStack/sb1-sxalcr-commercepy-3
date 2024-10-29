import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      onClick={() => navigate(`/portfolio/${project.slug}`)}
    >
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300">{project.description}</p>
      </div>
    </div>
  );
}