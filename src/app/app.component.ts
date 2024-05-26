import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  burgerMenu: boolean = false;

  title = 'my_portfolio_code';

  viewMenu() {
    this.burgerMenu = ! this.burgerMenu;
  }
}
