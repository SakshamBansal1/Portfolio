import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  roles = ['Software Developer', 'Full Stack Engineer', 'Angular Developer', 'Problem Solver'];
  roleIndex = 0;
  text = '';
  deleting = false;
  private timeout: any;

  ngOnInit() {
    this.typeEffect();
  }

  ngOnDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  typeEffect() {
    const currentRole = this.roles[this.roleIndex];

    if (!this.deleting && this.text.length < currentRole.length) {
      this.text = currentRole.slice(0, this.text.length + 1);
      this.timeout = setTimeout(() => this.typeEffect(), 80);
    } else if (!this.deleting && this.text.length === currentRole.length) {
      this.timeout = setTimeout(() => {
        this.deleting = true;
        this.typeEffect();
      }, 2000);
    } else if (this.deleting && this.text.length > 0) {
      this.text = this.text.slice(0, -1);
      this.timeout = setTimeout(() => this.typeEffect(), 40);
    } else if (this.deleting && this.text.length === 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.timeout = setTimeout(() => this.typeEffect(), 100);
    }
  }
}
