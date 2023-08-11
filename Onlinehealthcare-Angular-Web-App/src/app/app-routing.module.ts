import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookanappointmentComponent } from "./components/pages/bookanappointment/bookanappointment.component";
import { ConsultationsComponent } from "./components/pages/consultations/consultations.component";
import { HealthpackageComponent } from "./components/pages/healthpackage/healthpackage.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { PagenotfoundComponent } from "./components/pages/pagenotfound/pagenotfound.component";
import { SignupComponent } from "./components/pages/signup/signup.component";
import { SpecialitiesComponent } from "./components/pages/specialities/specialities.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'consultation',
    component: ConsultationsComponent
},
{
    path: 'specialities',
    component: SpecialitiesComponent
},
{
    path: 'health-package',
    component: HealthpackageComponent
},
{
    path: 'book-an-appointment',
    component: BookanappointmentComponent
},
{
    path: 'signup',
    component: SignupComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: '**',
    component: PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
