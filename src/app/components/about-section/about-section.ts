import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrls: ['./about-section.css']
})
export class AboutSectionComponent {
  stats = [
    { label: 'Projects Built', value: '3+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Experience', value: '6+ mo' },
    { label: 'Certifications', value: '2' },
  ];
}
