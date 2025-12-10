import React from 'react';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
  level: number; // 0-100
  icon?: React.ReactNode;
}

export interface CaseStudy {
  problem: string;
  process: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string; // Added for the short description below title
  description: string; // The "vibe" description
  tags: string[];
  imageUrl: string;
  videoUrl?: string; // Optional for hover preview
  demoUrl?: string;
  repoUrl?: string;
  category: 'web' | 'ai' | 'fullstack' | 'design';
  caseStudy?: CaseStudy; // Added for the modal
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  highlight: string; // The "Hidden Skill" (e.g., System Design)
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: number;
}