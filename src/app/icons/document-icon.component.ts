import { Component } from '@angular/core';

@Component({
  selector: 'app-document-icon',
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
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
			<path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path>
			<path d="M16 13H8"></path><path d="M16 17H8"></path>
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

export class DocumentIconComponent {}
