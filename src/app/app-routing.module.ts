import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeApp } from './components/aboutMe/aboutMe.component';
import { ResumeApp } from './components/resume/resume.component';

export const routes: Routes = [
    {path: '', component: AboutMeApp},
    {path: 'aboutMe', component: AboutMeApp},
    {path: 'resume', component: ResumeApp}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
