import { Component, Input, OnInit, Type } from '@angular/core';
import { Project } from '../../../../types/interfaces';
import { ProjectType } from '../../../../types/enums';
import { AcademyIconComponent } from '../../../icons/academy-icon.component';
import { PersonalIconComponent } from '../../../icons/personal-icon.component';
import { ProfessionalIconComponent } from '../../../icons/professional-icon.component';

@Component({
	selector: 'app-projectList',
	templateUrl: './projectList.component.html',
	styleUrls: ['./projectList.component.css', '../../../../styles.css']
})

export class ProjectListApp implements OnInit{

	@Input() projectType: ProjectType = ProjectType.Academy;
	@Input() projects: Project[] = [];
	title: string = "";
	filterOptions: string[] = [];
	


    ngOnInit() {
		this.title = this.getTitle()
	}

	getTitle(): string  {
		if (this.projectType == ProjectType.Academy) {
			return "Academic Projects"
		} else if (this.projectType == ProjectType.Professional) {
			return "Professional Experience"
		}
		return "Personal Projects"
	}

	get projectIcon(): Type<unknown> {
		switch (this.projectType) {
			case ProjectType.Academy:
				return AcademyIconComponent;
			case ProjectType.Personal:
				return PersonalIconComponent;
			case ProjectType.Professional:
				return ProfessionalIconComponent;
		}
	}
	
}