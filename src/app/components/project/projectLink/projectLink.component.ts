import { Component, Input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common'; 
import { ICON_MAP } from '../../../icons/icon-map';
import { IconKey } from '../../../../types/enums';

@Component({
    selector: 'app-github-icon',
    standalone: true,
    templateUrl: './projectLink.component.html',
    styleUrls: ['./projectLink.component.css', '../../../../styles.css'],
    imports: [NgComponentOutlet]
})

export class ProjectLinkComponent {
    @Input() text: string = "Backend";
    @Input() icon: IconKey = IconKey.GitHub;
    iconMap = ICON_MAP;
}