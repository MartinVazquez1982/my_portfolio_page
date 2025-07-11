import { Component, Input } from '@angular/core';
import { Project } from '../../../../interfaces/interfaces';
import { ProjectLinkComponent } from '../projectLink/projectLink.component';

@Component({
    selector: 'app-projectItem',
    templateUrl: './projectItem.component.html',
    styleUrls: ['./projectItem.component.css', '../../../../styles.css']
})

export class ProjectItemApp {

    @Input() item_project: Project = {} as Project;
    projectLink = ProjectLinkComponent
}