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

    onNavigateToAbout(){
        this.router.navigate(['aboutMe']);
    }

    onNavigateToResume(){
        this.router.navigate(['resume']);
    }

    onNavigateToSkills(){
        this.router.navigate(['skills']);
    }

    onNavigateToProjects(){
        this.router.navigate(['projects']);
    }

    onNavigateToContact(){
        this.router.navigate(['contact']);
    }

}