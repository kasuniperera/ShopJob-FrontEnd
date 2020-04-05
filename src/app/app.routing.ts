import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ContactusComponent } from './components/nav/contactus/contactus.component';
import { AboutusComponent } from './components/nav/aboutus/aboutus.component';
import { AddsComponent } from './components/nav/adds/adds.component';
import { PostVacancyComponent } from './components/nav/post-vacancy/post-vacancy.component';
import { RegistrationComponent } from './components/nav/registration/registration.component';
import { VacancyformComponent } from './components/nav/vacancyform/vacancyform.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'contactus',      component: ContactusComponent },
    { path: 'aboutus',      component: AboutusComponent },
    { path: 'addview',      component: AddsComponent },
    { path: 'postvacancy',      component: PostVacancyComponent },
    { path: 'registration',      component: RegistrationComponent },
    { path: 'vacancyform',      component: VacancyformComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
