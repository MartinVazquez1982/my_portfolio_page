import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-academy-icon',
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
			<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
			<path d="M22 10v6"></path>
			<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
		</svg>
  `,
  styles: [`
    svg {
      display: block;
    }
  `]
})

export class AcademyIconComponent {
  @Input() size: number = 16;
}
