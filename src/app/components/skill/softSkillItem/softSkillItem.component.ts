import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-softSkillItem',
    templateUrl: './softSkillItem.component.html',
    styleUrls: ['./softSkillItem.component.css', '../../../../styles.css']
})

export class SoftSkillItemApp {

    @Input() softSkill: String = "";
    @Input() num: number = 0;
  
}