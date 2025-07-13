import { Component, Input } from '@angular/core';
import { Project } from '../../../../types/interfaces';

@Component({
	selector: 'app-projectList',
	templateUrl: './projectList.component.html',
	styleUrls: ['./projectList.component.css', '../../../../styles.css']
})

export class ProjectListApp {

	@Input() projects: Project[] = [];

}