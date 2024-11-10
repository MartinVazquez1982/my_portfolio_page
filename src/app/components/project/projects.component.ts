import { Component, OnInit } from '@angular/core';
import * as data from '../../../data/projects.json';
import { ProjectList } from '../../../interfaces/interfaces';


@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css', '../../../styles.css']
})

export class ProjectsApp implements OnInit  {
    
	items: ProjectList = {
		academy: [],
		others:[]
	};
	buttons: boolean[] = [true, false];
	button_press: number = 0;

	constructor(){}

	ngOnInit(): void {
		for (let i = 0; i < data.academy.length; i += 6) {
			this.items.academy.push(data.academy.slice(i, i + 6))
		}
		for (let i = 0; i < data.others.length; i += 6) {
			this.items.others.push(data.others.slice(i, i + 6))
		}
	}


	onClickButton(event: MouseEvent){
		const idButton = (event.target as HTMLButtonElement).id;
		this.buttons[this.button_press] = false;
		this.button_press = Number(idButton);
		this.buttons[this.button_press] = true;
	}
}