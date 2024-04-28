import { Component, Input } from '@angular/core';
import { TechnicalSkill } from '../../../../interfaces/interfaces';


@Component({
    selector: 'app-tecnicalItem',
    templateUrl: './technicalItem.component.html',
    styleUrls: ['./technicalItem.component.css', '../../../../styles.css']
})

export class TechnicalItemApp {

    @Input() item_technical: TechnicalSkill = {} as TechnicalSkill;
  
}