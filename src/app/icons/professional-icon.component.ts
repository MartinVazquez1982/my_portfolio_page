import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-icon',
  standalone: true,
  template: `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round"
      stroke-linejoin="round" 
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
      <path d="M10 6h4"></path><path d="M10 10h4"></path>
      <path d="M10 14h4"></path><path d="M10 18h4"></path>
    </svg>
  `,
  styles: [`
    svg {
      width: 20px;
      height: 20px;
      display: block;
      color: rgb(96 165 250);
    }
  `]
})

export class ProfessionalIconComponent {}