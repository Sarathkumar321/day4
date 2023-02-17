import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
  path:'',component:HomepageComponent
  },
  {
    path:'artforms',component:ArtformsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'single',component:SingleComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
