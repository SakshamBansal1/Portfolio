import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.html',
  styleUrls: ['./experience-section.css']
})
export class ExperienceSectionComponent {
  highlights = [
    'Developed Angular dashboards for internal system monitoring',
    'Built and integrated REST APIs',
    'Improved performance and fixed production bugs',
    'Collaborated with developers to maintain scalable web applications',
  ];
}
