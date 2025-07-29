import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-icon',
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
      [style.width.px]="size"
      [style.height.px]="size"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
			<circle cx="12" cy="7" r="4"></circle>
    </svg>
  `,
  styles: [`
    svg {
      display: block;
    }
  `]
})

export class PersonalIconComponent {
  @Input() size: number = 16;
}