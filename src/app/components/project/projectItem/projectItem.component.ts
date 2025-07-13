import { Component, Input } from '@angular/core';
import { Project } from '../../../../types/interfaces';
import { ProjectLinkApp } from '../projectLink/projectLink.component';

@Component({
    selector: 'app-projectItem',
    templateUrl: './projectItem.component.html',
    styleUrls: ['./projectItem.component.css', '../../../../styles.css']
})

export class ProjectItemApp {

    @Input() project: Project = {} as Project;
}