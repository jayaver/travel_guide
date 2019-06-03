import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component'
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {path : 'signin', component:SigninComponent},
  {path: 'Signup', component: SignupComponent},
  {path: 'travel', component:TravelComponent},
  {path : '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
