import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeeBurgerMenu } from '../../../services/seeBurgerMenu'

@Component({
    selector: 'app-burgerMenu',
    templateUrl: './burgerMenu.component.html',
    styleUrls: ['./burgerMenu.component.css', '../../../styles.css']
})

export class BurgerMenuApp {
  
    constructor(private router: Router, public seeBurgerMenu: SeeBurgerMenu){

    }

    onNavigateTo(ruta:string){
        if(`/${ruta}` !== this.router.url){
            this.router.navigate([ruta]);
            window.scrollTo(0, 0);
        }
        this.seeBurgerMenu.seeBurgerMenu = ! this.seeBurgerMenu.seeBurgerMenu
    }
}