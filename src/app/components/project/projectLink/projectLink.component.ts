import { Component, Input } from '@angular/core';
import { ICON_MAP } from '../../../icons/icon-map';
import { Link } from '../../../../types/interfaces';

@Component({
    selector: 'app-projectlink',
    templateUrl: './projectLink.component.html',
    styleUrls: ['./projectLink.component.css', '../../../../styles.css'],
})

export class ProjectLinkApp {
    @Input() link: Link = {} as Link;
    iconMap = ICON_MAP;
}