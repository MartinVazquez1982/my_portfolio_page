import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppPI } from './components/personalInformation/pi.component';
import { SidebarApp } from './components/sidebarMenu/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    AppPI,
    SidebarApp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
