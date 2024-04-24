import { Component } from '@angular/core';
import * as data from '../../../data/resume.json';
import { ResumeData } from '../../../interfaces/interfaces';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css', '../../../styles.css']
})

export class ResumeApp {

    items: ResumeData = data;

}