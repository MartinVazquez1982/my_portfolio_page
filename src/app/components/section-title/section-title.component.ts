import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-title',
    templateUrl: './section-title.component.html',
    styleUrls: ['./section-title.component.css', '../../../styles.css']
})

export class SectionTitleApp {
  
    @Input() title: string = "";
    @Input() secundaryTitle: boolean = false;

}