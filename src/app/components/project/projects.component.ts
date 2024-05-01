import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css', '../../../styles.css']
})

export class ProjectsApp {
  
    buttons: boolean[] = [true, false];
    button_press: number = 0;

    onClickButton(event: MouseEvent){
        const idButton = (event.target as HTMLButtonElement).id;
        this.buttons[this.button_press] = false;
        this.button_press = Number(idButton);
        this.buttons[this.button_press] = true;
    }
}