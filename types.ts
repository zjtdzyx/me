import React from 'react';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
  level: number; // 0-100
  icon?: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  category: 'web' | 'ai' | 'fullstack';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: number;
}