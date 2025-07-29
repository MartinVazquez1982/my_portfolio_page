import { Component } from '@angular/core';
import * as data from '../../../data/skills.json';
import { SkillsData } from '../../../types/interfaces';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css', '../../../styles.css']
})

export class SkillsApp {

    items: SkillsData = data;
  
}