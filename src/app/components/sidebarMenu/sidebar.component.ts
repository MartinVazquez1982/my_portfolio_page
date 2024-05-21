import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css', '../../../styles.css']
})

export class SidebarApp {
  
    constructor(private router: Router){

    }

    onNavigateTo(ruta:string){
        this.router.navigate([ruta]);
        window.scrollTo(0, 0);
    }
}