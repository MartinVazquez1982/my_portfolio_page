import { Component } from '@angular/core';
import * as data from '../../../data/projects.json';
import { ProjectList } from '../../../interfaces/interfaces';


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css', '../../../styles.css']
})

export class ProjectsApp {
    
    items: ProjectList = data;
    buttons: boolean[] = [true, false];
    button_press: number = 0;

    constructor(){}


    onClickButton(event: MouseEvent){
        const idButton = (event.target as HTMLButtonElement).id;
        this.buttons[this.button_press] = false;
        this.button_press = Number(idButton);
        this.buttons[this.button_press] = true;
    }
}