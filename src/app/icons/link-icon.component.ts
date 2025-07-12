import { Component } from '@angular/core';

@Component({
  selector: 'app-link-icon',
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
      <path d="M15 3h6v6"></path>
      <path d="M10 14 21 3"></path>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    </svg>
  `,
  styles: [`
    svg {
      width: 20px;
      height: 20px;
      display: block;
    }
  `]
})

export class LinkIconComponent {}