import { Component, Input } from '@angular/core';
import { Resume } from '../../../../interfaces/interfaces';

@Component({
    selector: 'app-item-resume',
    templateUrl: './item-resume.component.html',
    styleUrls: ['./item-resume.component.css', '../../../../styles.css']
})

export class ItemResumeApp {
  
    @Input() item_resume: Resume = {} as Resume;

}