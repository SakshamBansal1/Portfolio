import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
}

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications-section.html',
  styleUrls: ['./certifications-section.css']
})
export class CertificationsSectionComponent {
  certs: Certification[] = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Coding Ninjas',
    },
    {
      title: 'Java Programming for Beginners',
      issuer: 'Infosys SpringBoard',
    },
  ];
}
