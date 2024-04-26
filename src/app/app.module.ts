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

@NgModule({
  declarations: [
    AppComponent,
    AppPI,
    SidebarApp,
    AboutMeApp,
    ResumeApp,
    ItemResumeApp,
    ContactApp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
