import { Component } from '@angular/core';

@Component({
  selector: 'app-colab-icon',
  standalone: true,
  template: `
    <svg 
			xmlns="http://www.w3.org/2000/svg" 
			width="18" 
			height="18" 
			viewBox="0 0 24 24" 
			fill="none" 
			stroke="currentColor" 
			stroke-width="2" 
			stroke-linecap="round" 
			stroke-linejoin="round"
		>
    	<path d="M12 7v14"></path>
    	<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
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

export class ColabIconComponent {}