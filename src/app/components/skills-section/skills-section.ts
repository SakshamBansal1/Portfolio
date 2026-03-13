import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrls: ['./skills-section.css']
})
export class SkillsSectionComponent {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'code',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'React.js', 'HTML', 'CSS', 'Material UI'],
    },
    {
      title: 'Backend',
      icon: 'server',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'SQL Server'],
    },
    {
      title: 'Languages',
      icon: 'terminal',
      skills: ['Java', 'C', 'C++', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Tools & Others',
      icon: 'wrench',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Webpack'],
    },
  ];

  getIcon(icon: string): string {
    const icons: { [key: string]: string } = {
      code: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      server: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',
      terminal: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
      wrench: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
    };
    return icons[icon] || '';
  }
}
