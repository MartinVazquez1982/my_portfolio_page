import { Component, OnInit } from '@angular/core';
import { SeeBurgerMenu } from '../services/seeBurgerMenu'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations:[
    trigger('fadeAnimation', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => visible', [
        animate('1s ease-in')
      ]),
      transition('visible => hidden', [
        animate('1s ease-out')
      ])
    ])
  ]
})

export class AppComponent implements OnInit {

  title = 'my_portfolio_code';
  isNotMobile: boolean = true;

  constructor(public seeBurgerMenu: SeeBurgerMenu){}

  ngOnInit(): void {
    this.checkMediaQuery()
  }

  checkMediaQuery(): void {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    this.isNotMobile = !mediaQuery.matches;

    mediaQuery.addEventListener('change', (event) => {
      this.isNotMobile = !event.matches;
    })
  }
}
