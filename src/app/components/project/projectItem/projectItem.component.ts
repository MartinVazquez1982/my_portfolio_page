import { Component, Input, Type } from '@angular/core';
import { Project } from '../../../../types/interfaces';
import { AcademyIconComponent } from '../../../icons/academy-icon.component';
import { PersonalIconComponent } from '../../../icons/personal-icon.component';
import { ProfessionalIconComponent } from '../../../icons/professional-icon.component';
import { ProjectType } from '../../../../types/enums';

type ProjectMeta = {
  label: string;
  value: string;
};

@Component({
	selector: 'app-projectItem',
	templateUrl: './projectItem.component.html',
	styleUrls: ['./projectItem.component.css', '../../../../styles.css']
})

export class ProjectItemApp {

	@Input() project: Project = {} as Project;
	@Input() projectType: ProjectType = ProjectType.Academy;
	
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

  	get projectIconTitle(): string {
		switch (this.projectType) {
			case ProjectType.Academy:
				return "Academic";
			case ProjectType.Personal:
				return "Personal";
			case ProjectType.Professional:
				return "Professional";
		}
	}

	get projectMetadata(): ProjectMeta[] {
		switch (this.projectType) {
			case ProjectType.Academy:
				return [
					{ label: "Course", value: this.project.experience?.title ?? ""},
					{ label: "Institution", value: this.project.experience?.organization ?? ""},
					{ label: "Year", value: this.project.experience?.period ?? ""}
				];
			case ProjectType.Professional:
				return [
					{ label: "Company", value: this.project.experience?.organization ?? ""},
					{ label: "Role", value: this.project.experience?.title ?? ""},
					{ label: "Year", value: this.project.experience?.period ?? ""}
				];
			default:
				return [];
		}
	}
}