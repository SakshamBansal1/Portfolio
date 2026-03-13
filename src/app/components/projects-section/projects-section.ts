import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  category: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.html',
  styleUrls: ['./projects-section.css']
})
export class ProjectsSectionComponent {
  activeFilter = 'All';
  filters = ['All', 'Angular', 'React'];

  projects: Project[] = [
    {
      title: 'Asset Tracker',
      description: 'Asset Management System for department asset allocation with dashboards and CRUD operations.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      highlights: [
        'Built asset tracking for department allocation',
        'Implemented assignment and return workflow',
        'Added search and filtering features',
      ],
      category: 'Angular',
    },
    {
      title: 'Jobify',
      description: 'Full-stack job portal for job seekers and recruiters with authentication and resume builder.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: [
        'Implemented authentication & authorization',
        'Created resume builder functionality',
        'Designed optimized REST APIs',
      ],
      github: 'https://github.com/SakshamBansal1',
      category: 'React',
    },
    {
      title: 'GoFoody',
      description: 'Food ordering platform with cart, checkout workflow, and order history tracking.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: [
        'Built cart & checkout workflow',
        'Implemented order history tracking',
        'Designed scalable APIs and DB schema',
      ],
      github: 'https://github.com/SakshamBansal1',
      category: 'React',
    },
  ];

  get filteredProjects(): Project[] {
    return this.activeFilter === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
