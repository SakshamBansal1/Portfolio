import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.html',
  styleUrls: ['./contact-section.css']
})
export class ContactSectionComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert('Message sent! I\'ll get back to you soon.');
    this.form = { name: '', email: '', message: '' };
  }
}
