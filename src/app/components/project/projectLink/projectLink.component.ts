import { Component, Input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common'; 
import { ICON_MAP } from '../../../icons/icon-map';

@Component({
    selector: 'app-github-icon',
    standalone: true,
    templateUrl: './projectLink.component.html',
    styleUrls: ['./projectLink.component.css', '../../../../styles.css'],
    imports: [NgComponentOutlet]
})

export class ProjectLinkComponent {
    @Input() text: string = "Backend";
    @Input() icon: string = "github";
    iconMap = ICON_MAP;
}