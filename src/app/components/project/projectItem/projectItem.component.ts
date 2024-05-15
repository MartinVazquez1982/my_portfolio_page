import { Component, Input } from '@angular/core';
import { Project } from '../../../../interfaces/interfaces';

@Component({
    selector: 'app-projectItem',
    templateUrl: './projectItem.component.html',
    styleUrls: ['./projectItem.component.css', '../../../../styles.css']
})

export class ProjectItemApp {

    @Input() item_project: Project = {} as Project;
}