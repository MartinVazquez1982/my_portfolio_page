import { Component, Input } from '@angular/core';
import { Certification } from '../../../../types/interfaces'

@Component({
    selector: 'app-item-certification',
    templateUrl: './item-certification.component.html',
    styleUrls: ['./item-certification.component.css', '../../../../styles.css']
})

export class ItemCetificationApp {

    @Input() certification: Certification = {} as Certification;
}