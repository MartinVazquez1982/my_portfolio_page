import { Component } from '@angular/core';
import { SeeBurgerMenu } from '../services/seeBurgerMenu'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'my_portfolio_code';

  constructor(public seeBurgerMenu: SeeBurgerMenu){}
}
