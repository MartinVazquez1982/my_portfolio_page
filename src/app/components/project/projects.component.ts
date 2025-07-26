import { Component } from '@angular/core';
import * as data from '../../../data/projects.json';
import { ProjectInformation } from '../../../types/interfaces';
import { ProjectType } from '../../../types/enums';


@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css', '../../../styles.css']
})

export class ProjectsApp {

	projects: ProjectInformation = data as ProjectInformation;
	projectType = ProjectType;

	constructor(){}
}