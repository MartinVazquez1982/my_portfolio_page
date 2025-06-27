import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { AppPI } from './components/personalInformation/pi.component';
import { SidebarApp } from './components/sidebarMenu/sidebar.component';
import { AboutMeApp }  from './components/aboutMe/aboutMe.component';
import { ResumeApp } from './components/resume/resume.component';
import { ItemResumeApp } from './components/resume/item-resume/item-resume.component';
import { ContactApp } from './components/contact/contact.component';
import { CopyrightApp } from './components/copyright/copyright.component';
import { SkillsApp } from './components/skill/skills.component';
import { TechnicalItemApp } from './components/skill/technicalItem/technicalItem.component';
import { ProjectsApp } from './components/project/projects.component';
import { SoftSkillItemApp } from './components/skill/softSkillItem/softSkillItem.component';
import { ProjectItemApp } from './components/project/projectItem/projectItem.component';
import { ProjectListApp } from './components/project/projectList/projectList.component';
import { ItemCetificationApp } from './components/resume/item-certification/item-certification.component';
import { BurgerMenuApp } from './components/burgerMenu/burgerMenu.component';
import { LoaderApp } from './components/contact/loader/loader.component';
import { SectionTitleApp } from './components/section-title/section-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AppPI,
    SidebarApp,
    AboutMeApp,
    ResumeApp,
    ItemResumeApp,
    ContactApp,
    CopyrightApp,
    SkillsApp,
    TechnicalItemApp,
    ProjectsApp,
    SoftSkillItemApp,
    ProjectItemApp,
    ItemCetificationApp,
    BurgerMenuApp,
    LoaderApp,
    ProjectListApp,
    SectionTitleApp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
