'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink, Calendar, User, Clock, CheckCircle } from 'lucide-react';
import { getProjectById } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectPage = () => {
  const params = useParams();
  const projectId = params.id as string;
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
            <Link href="/#works" className="text-blue-600 dark:text-blue-400 hover:underline">
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-800 py-8 pt-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Link 
            href="/#works" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2">
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                {project.pro && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      PRO
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {project.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(project.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                {project.client && (
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <User className="w-4 h-4 mr-2" />
                    {project.client}
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {project.duration}
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Live Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Solutions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {solution}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results</h2>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-sm text-gray-600 dark:text-gray-300 font-mono">
                {project.link}
              </div>
            </div>
            <div className="relative" style={{ height: '600px' }}>
              <iframe
                src={project.link}
                className="w-full h-full border-0"
                title={`Live preview of ${project.name}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open in New Tab
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Role</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.role}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Category</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.categories.join(', ')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.technologies.join(', ')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Project Type</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.pro ? 'Professional Project' : 'Personal Project'}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
