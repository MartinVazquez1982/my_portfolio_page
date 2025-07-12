import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Project } from '../../../../types/interfaces';

@Component({
	selector: 'app-projectList',
	templateUrl: './projectList.component.html',
	styleUrls: ['./projectList.component.css', '../../../../styles.css']
})

export class ProjectListApp implements OnInit {

	@Input() projects: Project[][] = [];
	@Input() active: boolean = false;
	currentNumber: number = 0;
	screenWidth: number = 0;

	static readonly MIN_WIDTH: number = 1200;

	ngOnInit(): void {

	}

	constructor(){
		this.getScreenSize();
	}

	@HostListener('window:resize', ['$event'])
	getScreenSize(event?: any) {
		this.screenWidth = window.innerWidth
		
	}

	current(i: number) {
		return i == this.currentNumber || this.screenWidth < ProjectListApp.MIN_WIDTH
	}

	press(i: number) {
		this.currentNumber = i
	}

	viewButtons(){
		return this.screenWidth > ProjectListApp.MIN_WIDTH
	}
}